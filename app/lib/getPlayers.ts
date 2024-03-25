"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  try {
    const allPlayers = await prisma.players.findMany({
      take: 100,
    });
    return allPlayers;
  } catch (error) {
    console.log(error);
  }
  return [];
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
