import { StockItem } from "@/components/StockItem/StockItem";
import styles from "./AssetSearcher.module.scss";
import { StockList } from "@/components/StockList/StockList";
import { useGetStockSearchResults } from "@/hooks/search.hooks";
import { useState } from "react";

export const AssetSearcher = () => {
  const [query, setQuery] = useState<string>("");
  const { data } = useGetStockSearchResults(query);

  console.log(data);

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
      <StockList autoHeight={true}>
        {data?.map((si, i) => (
          <StockItem
            key={i}
            name={si.name}
            ticker={si.ticker}
            currentPrice={si.currentPrice}
            priceChange={si.priceChange}
            priceChangePercentage={si.priceChangePercentage}
          />
        ))}
      </StockList>
    </div>
  );
};
