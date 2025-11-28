import type { PrismaClient } from "@prisma/client";
import type { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

import { medicationController } from "./medication.controller.ts";
import { medicationService } from "./medications.service.ts";
export default async function medicationRoutes(fastify: FastifyInstance) {
  const service = medicationService(fastify.prisma);
  const controller = medicationController(service, fastify);

  fastify.post("/medication", controller.createMedication);
}
