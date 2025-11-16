import cors from "@fastify/cors";
import Fastify from "fastify";
import userRoutes from "./modules/users/user.router.ts";

import jwtPlugin from "./plugins/jwt.ts";
import prismaPlugin from "./plugins/prisma.ts";
import { swaggerPlugin } from "./plugins/swagger.ts";
// import { swaggerPlugin } from "./plugins/swagger.js";

export async function buildApp() {
  const app = Fastify({ logger: true });
  await app.register(cors, { origin: "*" });
  await app.register(prismaPlugin);
  await app.register(swaggerPlugin);
  await app.register(jwtPlugin);

  //Rotas
  app.register(userRoutes);

  return app;
}
