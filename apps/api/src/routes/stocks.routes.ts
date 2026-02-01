import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import * as stockService from "../services/stock-data-generator.service";

export const stockRoutes = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      return stockService.getAllStocks();
    } catch (error) {
      fastify.log.error(error);
      return reply.code(500).send({
        error: "Internal Server Error",
        message: "Could not get all stocks",
      });
    }
  });

  fastify.get(
    "/stock-results",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { q } = request.query as { q?: string };
      console.log(q, 1);
      if (!q) return [];
      try {
        console.log(2);
        return stockService.getAllMatchingStocks(q);
      } catch (error) {
        return reply.code(500).send({
          error: "Internal Server Error",
          message: "Could not attempt to find matching stocks",
        });
      }
    },
  );
};
