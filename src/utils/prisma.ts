import { PrismaClient } from '@prisma/client'

export let prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
