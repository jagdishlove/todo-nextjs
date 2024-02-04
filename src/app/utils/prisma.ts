import { PrismaClient } from "@prisma/client";

// const globalWithPrisma = globalThis as { Prisma?: PrismaClient };

// export const prisma = globalWithPrisma.Prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production" && !globalWithPrisma.Prisma) {
//   globalWithPrisma.Prisma = prisma;
// }

const prisma = new PrismaClient();

export default prisma;