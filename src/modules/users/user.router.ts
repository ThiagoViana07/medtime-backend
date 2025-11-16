import type { PrismaClient } from "@prisma/client";
import type { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

import { userController } from "./user.controller.ts";
import { userService } from "./user.service.ts";
export default async function userRoutes(fastify: FastifyInstance) {
  const service = userService(fastify.prisma);
  const controller = userController(service, fastify);

  fastify.post("/register", controller.register);
  fastify.post("/login", controller.login);
}
