import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import * as marketIndicatorService from "../services/market-indicator-data-generator.service";

export const marketIndicatorRoutes = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      return marketIndicatorService.getAllMarketIndicators();
    } catch (error) {
      fastify.log.error(error);
      return reply.code(500).send({
        error: "Internal Server Error",
        message: "Could not get all market indicators",
      });
    }
  });
};
