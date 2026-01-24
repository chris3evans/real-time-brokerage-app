import { MarketIndicator, StockItem } from "@project/shared-types";
import { API_KEY, BASE_URL } from "./api.constants";

export const getCrudeOilData = async (): Promise<any> => {
  if (!API_KEY) {
    console.error("Missing API key for Alpha Advantage API!");
  }

  const url = `${BASE_URL}?function=BRENT&interval=monthly&apikey=${API_KEY}`;
  const data = await fetch(url);
  return data.json();
};

export const getStocks = async (): Promise<StockItem[]> => {
  const url = "http://localhost:3001/api/stocks";
  const data = await fetch(url);
  return data.json();
};

export const getMarketIndicators = async (): Promise<MarketIndicator[]> => {
  const url = "http://localhost:3001/api/market-indicators";
  const data = await fetch(url);
  return data.json();
};
