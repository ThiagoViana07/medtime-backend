import type { FastifyReply, FastifyRequest } from "fastify";

export function medicationController(service: any, fastify: any) {
  return {
    async createMedication(request: FastifyRequest, reply: FastifyReply) {
      const { name, dosage, frequency, patientId } = request.body as any;
      const medication = await service.createMedication({
        name,
        dosage,
        frequency,
        patientId,
      });
      return reply.code(201).send({
        id: medication.id,
        name: medication.name,
        dosage: medication.dosage,
        frequency: medication.frequency,
        patientId: medication.patientId,
      });
    },
  };
}
