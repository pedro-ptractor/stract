import type { FastifyReply, FastifyRequest } from 'fastify';
import { FileService } from '../../services/file-service.js';
// import z from 'zod';

const fileService = new FileService();
export async function stract(request: FastifyRequest, reply: FastifyReply) {
  try {
    const file = await request.file();
    // const bodySchema = z.object({
    //   name: z.string().min(1, 'Nome é obrigatório'),
    //   email: z.email('Email inválido'),
    //   password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    //   phone: z.string().min(1, 'Telefone é obrigatório'),
    // });

    if (!file) {
      return reply.status(400).send({ error: 'Arquivo não enviado' });
    }

    // const { name, email, password, phone } = bodySchema.parse(request.body);
    const data = await fileService.stractText({ file });
    // const user = await userService.register({
    //   name,
    //   email,
    //   password,
    //   phone,
    // });

    return reply.status(200).send({ data });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
