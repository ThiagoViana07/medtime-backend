import type { FastifyInstance } from "fastify";

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users", async (request, reply) => {
    return { hello: "world" };
  });
}
