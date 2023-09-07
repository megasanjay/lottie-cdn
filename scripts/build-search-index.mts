import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import "dotenv/config";

const prisma = new PrismaClient();

// get all the Lotties from the database
console.log("Fetching Lotties from the database...");
const lotties = await prisma.lottie.findMany({
  select: {
    id: true,
    name: true,
    description: true,
    tags: true,
  },
});

// close the database connection
console.log("Closing database connection...");
await prisma.$disconnect();

// write the json to a file
console.log("Writing lottie indexes to file...");
await fs.writeFile("./lotties.json", JSON.stringify(lotties));

// delete the old search index from meilisearch
console.log("Deleting old search index from MeiliSearch...");
const r = await fetch("https://search.lottiel.ink/indexes/lotties", {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${process.env.MEILISEARCH_ADMIN_API_KEY}`,
  },
});

if (!r.ok) {
  console.error(await r.text());
  process.exit(1);
}

console.log("Successfully deleted old search index from MeiliSearch!");

// create a new search index in meilisearch by uploading the json file we just created
console.log("Creating new search index in MeiliSearch...");
const fileData = await fs.readFile("./lotties.json");

const s = await fetch("https://search.lottiel.ink/indexes/lotties/documents", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.MEILISEARCH_ADMIN_API_KEY}`,
  },
  body: fileData,
});

if (s.status !== 202) {
  console.error(s.statusText);
  process.exit(1);
}

console.log("Successfully created new search index in MeiliSearch!");

// wait for the search index to be created
console.log("Waiting for the search index to be processed...");
await new Promise((resolve) => setTimeout(resolve, 10000));

// test the search index
console.log("Testing the search index...");
const t = await fetch(
  "https://search.lottiel.ink/indexes/lotties/search?q=loader",
  {
    headers: {
      Authorization: `Bearer ${process.env.MEILISEARCH_SEARCH_API_KEY}`,
    },
  },
);

if (t.status !== 200) {
  console.error(t.statusText);
  process.exit(1);
}

// delete the json file
console.log("Deleting lotties.json...");
await fs.unlink("./lotties.json");

// exit the script
process.exit(0);
