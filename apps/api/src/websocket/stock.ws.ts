import { WebSocket } from "ws";
import { Duration, Trend, WebSocketMessage } from "@project/shared-types";

export const formatDurationToMs = (duration: Duration): number => {
  switch (duration) {
    case "second":
      return 1000;
    case "minute":
      return 60000;
    case "hour":
      return 3600000;
    case "day":
      return 86400000;
    case "week":
    case "month":
    case "year":
      return 604800000;
    default:
      return 1000;
  }
};

export const handleStockMessages = (ws: WebSocket) => {
  const subscriptions = new Map<
    string,
    {
      price: number;
      trend: Trend;
      duration: Duration;
      intervalId: NodeJS.Timeout;
    }
  >();

  const createStockInterval = (ticker: string, duration: Duration) => {
    const msDuration = formatDurationToMs(duration);

    return setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        const currentStock = subscriptions.get(ticker);
        if (!currentStock) return;

        const onePercent = currentStock.price * 0.1;
        const randomFactor = (Math.random() - 0.5) * 5;
        const variation = onePercent * randomFactor;
        const newPrice = +(currentStock.price + variation).toFixed(2);

        subscriptions.set(ticker, { ...currentStock, price: newPrice });
        ws.send(
          JSON.stringify({
            ticker,
            price: newPrice,
          }),
        );
      }
    }, msDuration);
  };

  ws.on("message", (message: string) => {
    try {
      const data: WebSocketMessage = JSON.parse(message);

      switch (data.type) {
        case "SUBSCRIBE":
          if (
            data.ticker &&
            typeof data.price === "number" &&
            !isNaN(data.price) &&
            data.trend &&
            data.duration
          ) {
            if (subscriptions.has(data.ticker)) {
              clearInterval(subscriptions.get(data.ticker)!.intervalId);
            }
            console.log(`Subscribing to ${data.ticker}`);

            const intervalId = createStockInterval(data.ticker, data.duration);

            subscriptions.set(data.ticker, {
              price: data.price,
              trend: data.trend,
              duration: data.duration,
              intervalId,
            });
          }
          break;
        case "UNSUBSCRIBE":
          if (data.ticker && data.price && data.trend) {
            console.log(`Unsubscribing from ${data.ticker}`);
            clearInterval(subscriptions.get(data.ticker)!.intervalId);
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
    subscriptions.forEach((sub) => clearInterval(sub.intervalId));
    subscriptions.clear();
  });
};
