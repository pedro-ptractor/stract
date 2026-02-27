import type { FastifyInstance } from 'fastify';
import { fileRoutes } from './file-route';

export async function mainRoutes(app: FastifyInstance) {
  app.register(fileRoutes, { prefix: '/files' });
}
