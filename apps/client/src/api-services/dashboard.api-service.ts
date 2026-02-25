import { MarketIndicator, StockItem } from "@project/shared-types";
import { INTERNAL_API_BASE_URL } from "./api.constants";

export const getStocks = async (): Promise<StockItem[]> => {
  const url = `${INTERNAL_API_BASE_URL}/api/stocks`;
  const data = await fetch(url);
  return data.json();
};

export const getMarketIndicators = async (): Promise<MarketIndicator[]> => {
  const url = `${INTERNAL_API_BASE_URL}/api/market-indicators`;
  const data = await fetch(url);
  return data.json();
};
