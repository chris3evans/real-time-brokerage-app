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
      const stocks = stockService.getAllStocks();
      return reply.code(200).send(stocks);
    } catch (error) {
      fastify.log.error(error);
      return reply.code(500).send({
        error: "Internal Server Error",
        message: "Could not get all stocks",
      });
    }
  });
};
