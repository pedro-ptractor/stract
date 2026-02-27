import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import cors from '@fastify/cors';
import { env } from './env/index.js';
import { HttpError } from './errors/index.js';
import { mainRoutes } from './https/routers/main-route.js';
import multipart from '@fastify/multipart';

export const app = Fastify({});

app.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

//preciso posteriormente dividir em outro arquivo essas configurações
// app.register(jwt, {
//   secret: env.JWT_SECRET,
// });

app.register(multipart, {
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

app.register(mainRoutes, { prefix: '/api' });

app.setErrorHandler((error, _, reply) => {
  if (error instanceof HttpError) {
    return reply.status(error.statusCode).send({
      error: error.message,
    });
  }

  return reply.status(500).send({
    error: 'Internal server error',
  });
});
