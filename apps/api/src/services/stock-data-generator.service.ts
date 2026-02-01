import { StockData, StockItem } from "@project/shared-types";
import stockData from "../data/stocks.json" with { type: "json" };

const BASE_STOCK_DATA = stockData as StockData;

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
  const potentialStockTicker = searchInput.toLocaleUpperCase();

  return Object.keys(BASE_STOCK_DATA)
    .filter((ticker) => ticker.includes(potentialStockTicker))
    .map((ticker) => getStock(ticker));
};
