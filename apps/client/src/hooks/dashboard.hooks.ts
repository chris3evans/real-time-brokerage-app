import {
  getCrudeOilData,
  getTestCall,
} from "@/api-services/dashboard.api-service";
import { useQuery } from "@tanstack/react-query";

export const useTestCall = () => {
  return useQuery({
    queryKey: ["test-123"],
    queryFn: getTestCall,
    refetchInterval: 5000,
  });
};

export const useCrudeOil = () => {
  return useQuery({
    queryKey: ["crude-oil"],
    queryFn: getCrudeOilData,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
