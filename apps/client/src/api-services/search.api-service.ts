import { StockItem } from "@project/shared-types";

export const getStocksBySearch = async (
  searchInput: string,
): Promise<StockItem[]> => {
  const url = `http://localhost:3001/api/stocks/stock-results?q=${searchInput}`;
  const data = await fetch(url);
  return data.json();
};
