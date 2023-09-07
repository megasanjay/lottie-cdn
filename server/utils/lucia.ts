import { lucia } from "lucia";
import { h3 } from "lucia/middleware";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

// lucia polyfill does not work for some reason
import { webcrypto } from "crypto"; // polyfill for nodejs crypto | can be removed when on node v20

// @ts-expect-error
globalThis.crypto = webcrypto; // polyfill for nodejs crypto | can be removed when on node v20

const client = new PrismaClient();

export const auth = lucia({
  env: process.dev ? "DEV" : "PROD",
  middleware: h3(),
  adapter: prisma(client),

  getUserAttributes: (data) => {
    return {
      username: data.username,
    };
  },
});

export type Auth = typeof auth;
