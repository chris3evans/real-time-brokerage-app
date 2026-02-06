import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import * as stockService from "../services/stock-data-generator.service";
import { AssetDetails, StockItem } from "@project/shared-types";
import { WebSocket } from "ws";

export const stockRoutes = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  fastify.get(
    "/",
    async (
      request: FastifyRequest,
      reply: FastifyReply,
    ): Promise<(StockItem | undefined)[]> => {
      try {
        return stockService.getAllStocks();
      } catch (error) {
        fastify.log.error(error);
        return reply.code(500).send({
          error: "Internal Server Error",
          message: "Could not get all stocks",
        });
      }
    },
  );

  fastify.get(
    "/stock",
    async (
      request: FastifyRequest,
      reply: FastifyReply,
    ): Promise<StockItem> => {
      const { q } = request.query as { q?: string };
      if (!q) return reply.code(400).send({ error: "Missing query parameter" });
      try {
        return stockService.getStock(q);
      } catch (error) {
        fastify.log.error(error);
        return reply.code(500).send({
          error: "Internal Server Error",
          message: `Could not get data for ${q}`,
        });
      }
    },
  );

  fastify.get(
    "/stock-results",
    async (
      request: FastifyRequest,
      reply: FastifyReply,
    ): Promise<StockItem[]> => {
      const { q } = request.query as { q?: string };
      if (!q) return [];
      try {
        return stockService.getAllMatchingStocks(q);
      } catch (error) {
        return reply.code(500).send({
          error: "Internal Server Error",
          message: "Could not attempt to find matching stocks",
        });
      }
    },
  );

  fastify.get(
    "/stock-details",
    async (
      request: FastifyRequest,
      reply: FastifyReply,
    ): Promise<AssetDetails | undefined> => {
      const { q } = request.query as { q?: string };
      if (!q) return reply.code(400).send({ error: "Missing query parameter" });
      try {
        return stockService.getStockDetails(q);
      } catch (error) {
        return reply.code(500).send({
          error: "Internal Server Error",
          message: `Could not get the asset details for ${q}`,
        });
      }
    },
  );

  // fastify.get(
  //   "/stream",
  //   { websocket: true },
  //   (connection: { socket: WebSocket }, req: FastifyRequest) => {
  //     console.log("Client connected to stock stream");

  //     if (!connection.socket) {
  //       console.error("CRITICAL: Socket is undefined!");
  //       return;
  //     }

  //     const interval = setInterval(() => {
  //       if (!connection.socket) {
  //         console.warn("Socket vanished before sending data");
  //         clearInterval(interval);
  //         return;
  //       }

  //       if (connection.socket.readyState === WebSocket.OPEN) {
  //         const fakePriceUpdate = {
  //           ticker: "AAPL",
  //           price: 150 + Math.random() * 10,
  //           timestamp: Date.now(),
  //         };
  //         connection.socket.send(JSON.stringify(fakePriceUpdate));
  //       } else if (connection.socket.readyState >= WebSocket.CLOSING) {
  //         clearInterval(interval);
  //       }
  //     }, 1000);

  //     if (connection.socket) {
  //       connection.socket.on("message", (message: Buffer) => {
  //         console.log(`Received: ${message.toString()}`);
  //       });

  //       connection.socket.on("close", () => {
  //         console.log("Client disconnected");
  //         clearInterval(interval);
  //       });

  //       connection.socket.on("error", (err) => {
  //         console.error("Socket error:", err);
  //         clearInterval(interval);
  //       });
  //     } else {
  //       console.error("Socket was undefined when trying to attach listeners");
  //       clearInterval(interval);
  //     }
  //   },
  // );
};
