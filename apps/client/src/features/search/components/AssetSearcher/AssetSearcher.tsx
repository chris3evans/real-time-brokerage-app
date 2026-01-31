import { StockItem } from "@/components/StockItem/StockItem";
import styles from "./AssetSearcher.module.scss";

export const AssetSearcher = () => {
  return (
    <div className={styles["asset-searcher"]}>
      <div className={styles["search-bar"]}>
        <input
          className={styles["search-input"]}
          type="text"
          placeholder="Search for a stock, index, or commodity..."
        />
      </div>
      <div className={styles["search-suggestions"]}>
        <StockItem
          key={1}
          name={"Apple"}
          ticker={"AAPL"}
          currentPrice={250}
          priceChangePercentage={1}
          priceChange={2.5}
        />
        <StockItem
          key={2}
          name={"Google"}
          ticker={"GOOG"}
          currentPrice={330}
          priceChangePercentage={1}
          priceChange={3.3}
        />
        <StockItem
          key={3}
          name={"Amazon"}
          ticker={"AMZN"}
          currentPrice={240}
          priceChangePercentage={1}
          priceChange={2.4}
        />
      </div>
    </div>
  );
};
