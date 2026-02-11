import {
  AssetDetails,
  AssetDetailsList,
  Duration,
  LineGraphPoint,
  StockData,
  StockItem,
  Trend,
} from "@project/shared-types";
import stockData from "../data/stocks.json" with { type: "json" };
import stockDetails from "../data/stock-details.json" with { type: "json" };

const BASE_STOCK_DATA = stockData as StockData;
const BASE_STOCK_DETAILS_LIST = stockDetails as AssetDetailsList;

export const getStock = (ticker: string): StockItem => {
  const stock = BASE_STOCK_DATA[ticker.toLocaleUpperCase()];

  // if (!stock) return;

  const volatility = Math.random() * 0.01;
  const priceChange = +(stock.price * volatility).toFixed(2);
  const currentPrice = +(stock.price + priceChange).toFixed(2);
  const priceChangePercentage = +((priceChange / currentPrice) * 100).toFixed(
    2,
  );

  return {
    name: stock.name,
    ticker: stock.ticker,
    currentPrice,
    priceChange,
    priceChangePercentage,
  };
};

export const getAllStocks = (): (StockItem | undefined)[] => {
  return Object.keys(BASE_STOCK_DATA).map((ticker) => getStock(ticker));
};

export const getAllMatchingStocks = (searchInput: string): StockItem[] => {
  const uppercaseSearchInput = searchInput.toLocaleUpperCase();

  return Object.entries(BASE_STOCK_DATA)
    .filter(
      ([ticker, stock]) =>
        ticker.includes(uppercaseSearchInput) ||
        stock.name.toLocaleUpperCase().includes(uppercaseSearchInput),
    )
    .map(([ticker, _]) => getStock(ticker))
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const getStockDetails = (ticker: string): AssetDetails => {
  return BASE_STOCK_DETAILS_LIST[ticker.toLocaleUpperCase()];
};

export const generatePriceHistory = (
  ticker: string,
  trend: Trend,
  duration: Duration,
): LineGraphPoint[] => {
  const stock = BASE_STOCK_DATA[ticker];
  const priceNow = stock.price;
  const timeStampNow = Date.now();
  let durationMs: number = 0;

  switch (duration) {
    case "second":
      durationMs = 1000;
      break;
    case "minute":
      durationMs = 60000;
      break;
    case "hour":
      durationMs = 3600000;
      break;
    case "day":
      durationMs = 86400000;
      break;
    case "week":
      durationMs = 604800000;
      break;
    case "month":
      durationMs = 2592000000;
      break;
    case "year":
      durationMs = 31536000000;
      break;
    default:
      durationMs = 1000;
  }

  const historicalPriceData: LineGraphPoint[] = [];

  // will get 100 points of historical data
  for (let i = 0; i < 100; i++) {
    historicalPriceData.push({
      timeString: formatTimestampToDate(
        timeStampNow - (i + 1) * durationMs,
        duration,
      ),
      value: priceNow,
    });
  }

  return historicalPriceData;
};

export const formatTimestampToDate = (
  timestamp: number,
  duration: Duration,
): string => {
  const date = new Date(timestamp);
  switch (duration) {
    case "second":
      // Formats as HH:mm:ss
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    case "minute":
      // Formats as HH:mm
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    case "hour":
      // Formats as HH:00 (Hours only, minutes set to 00)
      return `${date.getHours().toString().padStart(2, "0")}:00`;
    case "day":
    case "week":
      // Formats as "13 feb"
      return date.toLocaleDateString([], { day: "numeric", month: "short" });
    case "month":
      // Formats as "feb 26" (using the current year 2026 based on your prompt)
      return `${date.toLocaleDateString([], { month: "short" })} ${date.getFullYear().toString().slice(-2)}`;
    case "year":
      // Formats as "2026"
      return date.getFullYear().toString();
    default:
      return "";
  }
};
