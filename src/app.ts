import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import Fastify from "fastify";

import userRoutes from "./modules/users/user.router.ts";

// import { prismaPlugin } from "./plugins/prisma.js";
// import { jwtPlugin } from "./plugins/jwt.js";
// import { swaggerPlugin } from "./plugins/swagger.js";

export async function buildApp() {
  const app = Fastify({ logger: true });
  await app.register(cors, { origin: "*" });
  await app.register(swagger);
  await app.register(swaggerUI);

  //Rotas
  app.register(userRoutes);

  return app;
}
