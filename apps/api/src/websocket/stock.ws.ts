import { WebSocket } from "ws";
import * as stockService from "../services/stock-data-generator.service";
import { WebSocketMessage } from "@project/shared-types";

export const handleStockMessages = (ws: WebSocket) => {
  const subscriptions = new Map<string, number>();

  const interval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      for (const [ticker, price] of subscriptions) {
        ws.send(JSON.stringify({ price, ticker }));
      }
    }
  }, 1000);

  ws.on("message", (message: string) => {
    try {
      const data: WebSocketMessage = JSON.parse(message);

      switch (data.type) {
        case "SUBSCRIBE":
          if (data.ticker && data.price) {
            console.log(`Subscribing to ${data.ticker}`);
            subscriptions.set(data.ticker, data.price);
          }
          break;
        case "UNSUBSCRIBE":
          if (data.ticker && data.price) {
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
