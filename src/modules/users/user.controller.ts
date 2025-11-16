import bcrypt from "bcryptjs";
import type { FastifyReply, FastifyRequest } from "fastify";

export function userController(service: any, fastify: any) {
  return {
    async register(request: FastifyRequest, reply: FastifyReply) {
      const { email, password, name, role } = request.body as any;
      const hash = await bcrypt.hash(password, 10);
      const user = await service.createUser({
        email,
        password: hash,
        name,
        role,
      });
      return reply
        .code(201)
        .send({ id: user.id, email: user.email, name: user.name });
    },

    async login(request: FastifyRequest, reply: FastifyReply) {
      const { email, password } = request.body as any;
      const user = await service.findUserByEmail(email);
      if (!user) {
        return reply.code(401).send({ message: "Invalid email or password" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return reply.code(401).send({ message: "Invalid email or password" });
      }
      const token = fastify.jwt.sign({ sub: user.id, role: user.role });
      console.log("Generated JWT Token:", token);
      return reply.send({ token });
    },
  };
}
