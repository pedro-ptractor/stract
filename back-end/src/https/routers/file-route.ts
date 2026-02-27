import type { FastifyInstance } from 'fastify';
import { stract } from '../controllers/file-controller';

export async function fileRoutes(app: FastifyInstance) {
  app.post('/', stract);
}
