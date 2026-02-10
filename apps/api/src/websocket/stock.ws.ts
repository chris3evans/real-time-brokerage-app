import { WebSocket } from "ws";
import * as stockService from "../services/stock-data-generator.service";
import { WebSocketMessage } from "@project/shared-types";

export const handleStockMessages = (ws: WebSocket) => {
  const subscriptions = new Set<string>();

  const interval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      for (const ticker of subscriptions) {
        // const stockData = stockService.getStock(ticker);

        // ws.send(JSON.stringify(stockData));
        ws.send(JSON.stringify({ price: Math.random() }));
      }
    }
  }, 1000);

  ws.on("message", (message: string) => {
    try {
      const data: WebSocketMessage = JSON.parse(message);

      switch (data.type) {
        case "SUBSCRIBE":
          if (data.ticker) {
            console.log(`Subscribing to ${data.ticker}`);
            subscriptions.add(data.ticker);
          }
          break;
        case "UNSUBSCRIBE":
          if (data.ticker) {
            console.log(`Unsubscribing from ${data.ticker}`);
            subscriptions.delete(data.ticker);
          }
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
