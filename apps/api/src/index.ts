import Fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";
import { PrismaClient } from "./generated/client/index.js";
import { stockRoutes } from "./routes/stocks.routes.js";
import { marketIndicatorRoutes } from "./routes/market-indicators.routes.js";
import { WebSocketServer } from "ws";
// import websocket from "@fastify/websocket";

const server = Fastify({ logger: true });

const wss = new WebSocketServer({ server: server.server });

// server.register(websocket);

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
server.register(marketIndicatorRoutes, { prefix: "/api/market-indicators" });

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

wss.on("connection", (ws) => {
  const interval = setInterval(() => {
    if (ws.readyState === 1) {
      // const fakeUpdate = {
      //   ticker: "AAPL",
      //   price: 150 + Math.random() * 10,
      // };
      // ws.send(JSON.stringify(fakeUpdate));
      ws.send(JSON.stringify({ price: Math.random() }));
    }
  }, 1000);

  ws.on("close", () => {
    clearInterval(interval);
  });
});

const start = async () => {
  try {
    await server.listen({
      port: Number(process.env.PORT) || 3001,
      host: "0.0.0.0",
    });

    // const wss = new WebSocketServer({ server: server.server });

    // wss.on("connection", (ws) => {
    //   console.log("Client connected directly to WSS");

    //   ws.on("message", (message) => {
    //     console.log("received: %s", message);
    //   });

    //   const interval = setInterval(() => {
    //     if (ws.readyState === 1) {
    //       // 1 = OPEN
    //       const fakeUpdate = {
    //         ticker: "AAPL",
    //         price: 150 + Math.random() * 10,
    //       };
    //       ws.send(JSON.stringify(fakeUpdate));
    //     }
    //   }, 1000);

    //   ws.on("close", () => {
    //     clearInterval(interval);
    //   });
    // });
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
