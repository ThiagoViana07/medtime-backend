import type { PrismaClient } from "@prisma/client";

export function userService(prisma: PrismaClient) {
  return {
    createUser: (data: any) => prisma.user.create({ data }),
    findUserByEmail: (email: string) =>
      prisma.user.findUnique({ where: { email } }),
  };
}
