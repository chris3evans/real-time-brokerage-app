import { AssetDetails, StockItem } from "@project/shared-types";

export const getStock = async (ticker: string): Promise<StockItem> => {
  const url = `http://localhost:3001/api/stocks/stock?q=${ticker}`;
  const data = await fetch(url);
  return data.json();
};

export const getStocksBySearch = async (
  searchInput: string,
): Promise<StockItem[]> => {
  const url = `http://localhost:3001/api/stocks/stock-results?q=${searchInput}`;
  const data = await fetch(url);
  return data.json();
};

export const getAssetDetails = async (
  ticker: string,
): Promise<AssetDetails> => {
  const url = `http://localhost:3001/api/stocks/stock-details?q=${ticker}`;
  const data = await fetch(url);
  return data.json();
};
