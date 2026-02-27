import type { FastifyInstance } from 'fastify';
import { stract } from '../controllers/file-controller.js';

export async function fileRoutes(app: FastifyInstance) {
  app.post('/', stract);
}
