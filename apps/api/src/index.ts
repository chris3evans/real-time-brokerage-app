import Fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";
import { PrismaClient } from "./generated/client/index.js";
import { stockRoutes } from "./routes/stocks.routes.js";

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

server.get("/status", async () => {
  return { status: "Server is running YAYYY!" };
});

server.register(stockRoutes, { prefix: "/api/stocks" });

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

const start = async () => {
  try {
    await server.listen({
      port: Number(process.env.PORT) || 3001,
      host: "0.0.0.0",
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"], // Useful for debugging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
