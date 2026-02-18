import { WebSocket } from "ws";
import * as stockService from "../services/stock-data-generator.service";
import { Trend, WebSocketMessage } from "@project/shared-types";

export const handleStockMessages = (ws: WebSocket) => {
  const subscriptions = new Map<string, { price: number; trend: Trend }>();

  const interval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      for (const [ticker, stock] of subscriptions) {
        const onePercent = stock.price * 0.1;
        const randomFactor = (Math.random() - 0.5) * 2;
        const variation = onePercent * randomFactor;
        const newPrice = +(stock.price + variation).toFixed(2);

        ws.send(
          JSON.stringify({
            ticker,
            price: newPrice,
          }),
        );
      }
    }
  }, 1000);

  ws.on("message", (message: string) => {
    try {
      const data: WebSocketMessage = JSON.parse(message);

      switch (data.type) {
        case "SUBSCRIBE":
          if (
            data.ticker &&
            typeof data.price === "number" &&
            !isNaN(data.price) &&
            data.trend
          ) {
            console.log(`Subscribing to ${data.ticker}`);
            subscriptions.set(data.ticker, {
              price: data.price,
              trend: data.trend,
            });
          }
          break;
        case "UNSUBSCRIBE":
          if (data.ticker && data.price && data.trend) {
            console.log(`Unsubscribing from ${data.ticker}`);
            subscriptions.delete(data.ticker);
          }
          break;
        default:
          console.warn("Unkown message type:", data.type);
      }
    } catch (error) {
      console.error("Invalid message format");
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected, cleaning up");
    clearInterval(interval);
    subscriptions.clear();
  });
};
