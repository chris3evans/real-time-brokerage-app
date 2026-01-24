import { StockData, StockItem } from "@project/shared-types";
import stockData from "../data/stocks.json" with { type: "json" };

const BASE_STOCK_DATA = stockData as StockData;

export const getStock = (ticker: string): StockItem | null => {
  const stock = BASE_STOCK_DATA[ticker.toLocaleUpperCase()];

  if (!stock) return null;

  const volatility = stock.price * 0.01;
  const changePercentage = (Math.random() - 0.5) * 2 * volatility;
  const priceChange = +(stock.price * changePercentage).toFixed(2);
  const currentPrice = +(priceChange + stock.price).toFixed(2);
  const priceChangePercentage = +(changePercentage * 100).toFixed(2);

  return {
    name: stock.name,
    ticker: stock.ticker,
    currentPrice,
    priceChange,
    priceChangePercentage,
  };
};

export const getAllStocks = (): (StockItem | null)[] => {
  return Object.keys(BASE_STOCK_DATA).map((ticker) => getStock(ticker));
};
