import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import type { FastifyInstance } from "fastify";

export async function swaggerPlugin(fastify: FastifyInstance) {
  fastify.register(swagger, {
    openapi: {
      info: {
        title: "MedTime API",
        description: "API para gerenciamento de rotina médica",
        version: "1.0.0",
      },
    },
  });

  fastify.register(swaggerUI, {
    routePrefix: "/docs",
  });
}
