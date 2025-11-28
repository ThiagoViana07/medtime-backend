import type { PrismaClient } from "@prisma/client";

export function medicationService(prisma: PrismaClient) {
  return {
    createMedication: (data: any) => prisma.medication.create({ data }),
    deleteMedication: (id: string) =>
      prisma.medication.delete({ where: { id } }),
  };
}
