// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // allow prisma to be a global var in dev
  // so hot reload doesn't create multiple instances
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
