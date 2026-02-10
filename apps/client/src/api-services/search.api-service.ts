import {
  AssetDetails,
  LineGraphPoint,
  StockData,
  StockItem,
  Trend,
  Duration,
} from "@project/shared-types";

export const getStock = async (ticker: string): Promise<StockItem> => {
  const url = `http://localhost:3001/api/stocks/stock?q=${ticker}`;
  const response = await fetch(url);
  return response.json();
};

export const getStocksBySearch = async (
  searchInput: string,
): Promise<StockItem[]> => {
  const url = `http://localhost:3001/api/stocks/stock-results?q=${searchInput}`;
  const response = await fetch(url);
  return response.json();
};

export const getAssetDetails = async (
  ticker: string,
): Promise<AssetDetails> => {
  const url = `http://localhost:3001/api/stocks/stock-details?q=${ticker}`;
  const response = await fetch(url);
  return response.json();
};

export const getAssetPriceHistory = async (
  stock: StockData,
  trend: Trend,
  duration: Duration,
): Promise<LineGraphPoint[]> => {
  const url = `http://localhost:3001/api/stocks/asset-price-history`;
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stock,
      trend,
      duration,
    }),
  };

  const response = await fetch(url, requestOptions);
  return response.json();
};
