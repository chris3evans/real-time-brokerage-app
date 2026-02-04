import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import * as stockService from "../services/stock-data-generator.service";
import { AssetDetails, StockItem } from "@project/shared-types";

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
};
