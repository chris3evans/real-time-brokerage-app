import Fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";
import { PrismaClient } from "./generated/client/index.js";

const server = Fastify({ logger: true });
server.register(cors, {
  origin: [
    "http://localhost:5173",
    "https://real-time-brokerage-app-client.vercel.app",
    /\.vercel\.app$/,
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"], // Useful for debugging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

server.get("/status", async () => {
  return { status: "Server is running YAYYY!" };
});

const start = async () => {
  try {
    await server.listen({
      port: Number(process.env.PORT) || 3001,
      host: "0.0.0.0",
    });
    console.log(
      `Server is running on port ${process.env.PORT || 3001} AND IS FULL STACK`,
    );
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

server.get("/profile", async (request, response) => {
  try {
    const user = await prisma.user.findFirst({
      where: { username: "TestTrader" },
    });

    return user;
  } catch (error) {
    console.error("DETAILED PRISMA ERROR:", error);
    return response.status(500).send({ error: "Database fetch failed" });
  }
});

start();
