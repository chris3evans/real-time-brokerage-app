import {
  getMarketIndicators,
  getStocks,
} from "@/api-services/dashboard.api-service";
import { useQuery } from "@tanstack/react-query";

export const useGetStocks = () => {
  return useQuery({
    queryKey: ["get-stocks"],
    queryFn: getStocks,
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
  });
};

export const useGetMarketIndicators = () => {
  return useQuery({
    queryFn: getMarketIndicators,
    queryKey: ["get-market-indicators"],
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
  });
};
