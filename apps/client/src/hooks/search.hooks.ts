import {
  getStocksBySearch,
  getStock,
  getAssetDetails,
  getAssetPriceHistory,
} from "@/api-services/search.api-service";
import { StockData, Trend, Duration } from "@project/shared-types";
import { useQuery } from "@tanstack/react-query";

export const useGetStockSearchResults = (searchInput: string) => {
  return useQuery({
    queryFn: () => getStocksBySearch(searchInput),
    queryKey: ["stock-search-results", searchInput],
    enabled: searchInput.length > 0,
    refetchInterval: 5000,
  });
};

export const useGetStock = (ticker: string) => {
  return useQuery({
    queryFn: () => getStock(ticker),
    queryKey: ["get-stock", ticker],
    enabled: ticker.length > 0,
    refetchInterval: 5000,
  });
};

export const useGetAssetDetails = (ticker: string) => {
  return useQuery({
    queryFn: () => getAssetDetails(ticker),
    queryKey: ["get-asset-details", ticker],
    enabled: ticker.length > 0,
  });
};

export const useGetAssetPriceHistory = (
  stock: StockData,
  trend: Trend,
  duration: Duration,
) => {
  return useQuery({
    queryFn: () => getAssetPriceHistory(stock, trend, duration),
    queryKey: ["get-asset-price-history", Object.keys(stock)[0]],
    enabled: Object.values(stock)[0].ticker.length > 0,
  });
};
