import { StockItem } from "@/components/StockItem/StockItem";
import styles from "./AssetSearcher.module.scss";
import { StockList } from "@/components/StockList/StockList";
import { useGetStockSearchResults } from "@/hooks/search.hooks";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const AssetSearcher = () => {
  const [query, setQuery] = useState<string>("");
  const { data, isLoading, isLoadingError, isError } =
    useGetStockSearchResults(query);

  return (
    <div className={styles["asset-searcher"]}>
      <div className={styles["search-bar"]}>
        <input
          className={styles["search-input"]}
          type="text"
          placeholder="Search for a stock, index, or commodity..."
          onInput={(e) => setQuery(e.currentTarget.value)}
        />
      </div>
      {data && (
        <StockList autoHeight={true}>
          {data?.map((si, i) => (
            <NavLink to="/asset-profile" key={i}>
              <StockItem
                name={si.name}
                ticker={si.ticker}
                currentPrice={si.currentPrice}
                priceChange={si.priceChange}
                priceChangePercentage={si.priceChangePercentage}
              />
            </NavLink>
          ))}
        </StockList>
      )}
      {query.length > 0 && data?.length === 0 && (
        <div className={styles["no-search-results"]}>
          No matching stocks found!
        </div>
      )}
      {isLoading && (
        <div className={styles["loading-search-results"]}>
          Loading search results
        </div>
      )}
      {isLoadingError && (
        <div className="loading-api-error">
          Could not load search results, retrieving error
        </div>
      )}
      {isError && (
        <div className="api-error">Could not load search results</div>
      )}
    </div>
  );
};
