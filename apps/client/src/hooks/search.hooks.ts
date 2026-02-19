import {
  getStocksBySearch,
  getStock,
  getAssetDetails,
  getAssetPriceHistory,
} from "@/api-services/search.api-service";
import { Trend, Duration } from "@project/shared-types";
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
  ticker: string,
  trend: Trend,
  duration: Duration,
) => {
  return useQuery({
    queryFn: () => getAssetPriceHistory(ticker, trend, duration),
    queryKey: ["get-asset-price-history", ticker, duration],
    enabled: ticker.length > 0,
    refetchOnWindowFocus: false,
  });
};
