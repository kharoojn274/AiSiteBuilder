// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Ensure singleton pattern to avoid multiple instances in dev (Next.js/Hot reload)
const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
