import { getTestCall } from "@/api-services/dashboard.api-service";
import { useQuery } from "@tanstack/react-query";

export const useTestCall = () => {
  return useQuery({
    queryKey: ["test-123"],
    queryFn: getTestCall,
    refetchInterval: 5000,
  });
};
