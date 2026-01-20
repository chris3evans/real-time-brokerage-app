import { getCrudeOilData } from "@/api-services/dashboard.api-service";
import { useQuery } from "@tanstack/react-query";

export const useCrudeOil = () => {
  return useQuery({
    queryKey: ["crude-oil"],
    queryFn: getCrudeOilData,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
