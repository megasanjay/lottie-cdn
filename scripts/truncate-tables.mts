import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tables = ["Lottie", "Like", "Comment"];

const truncateTables = async () => {
  console.log("Truncating tables...");

  for (const table of tables) {
    console.log(`Truncating table ${table}...`);

    await prisma.$executeRaw`TRUNCATE TABLE "${table}" RESTART IDENTITY CASCADE`;
  }
};

await truncateTables();

process.exit(0);
