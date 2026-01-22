import { getMarketIndicators } from "@/api-services/dashboard.mock-api-service";
import { useQuery } from "@tanstack/react-query";

export const useMarketIndicators = () => {
  return useQuery({
    queryKey: ["market-indicators"],
    queryFn: getMarketIndicators,
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
  });
};
