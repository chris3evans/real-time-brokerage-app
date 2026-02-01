import { getStocksBySearch } from "@/api-services/search.api-service";
import { useQuery } from "@tanstack/react-query";

export const useGetStockSearchResults = (searchInput: string) => {
  return useQuery({
    queryFn: () => getStocksBySearch(searchInput),
    queryKey: ["stock-search-results", searchInput],
    enabled: searchInput.length > 0,
    refetchInterval: 5000,
  });
};
