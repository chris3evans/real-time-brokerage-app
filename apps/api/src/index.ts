import Fastify from 'fastify';
import cors from '@fastify/cors';
import 'dotenv/config'
// import { PrismaClient } from '@prisma/client/extension';
import { PrismaClient } from '@prisma/client/extension'

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient()

fastify.get('/status', async () => {
  return { status: 'Server is running YAYYY!' };
});

fastify.register(cors, {
  origin: 'http://localhost:5173', 
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

fastify.get('/profile', async (request, response) => {
  try {
  const user = await prisma.user.findFirst({
    where: { username: 'TestTrader'}
  });

  return user;
  } catch (error) {
    console.error("DETAILED PRISMA ERROR:", error);
    return response.status(500).send({ error: "Database fetch failed" });
  }
})

start();