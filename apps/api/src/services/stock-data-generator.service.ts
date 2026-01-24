import { MarketData, StockItemProps } from "@project/shared-types";
import marketData from "../data/stocks.json" with { type: "json" };

const BASE_MARKET_DATA = marketData as MarketData;

export const getStock = (ticker: string): StockItemProps | null => {
  const stock = BASE_MARKET_DATA[ticker.toLocaleUpperCase()];

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

export const getAllStocks = (): (StockItemProps | null)[] => {
  return Object.keys(BASE_MARKET_DATA).map((ticker) => getStock(ticker));
};
