import { Card } from "@/components/Card/Card";
import styles from "./DashboardWatchList.module.scss";
import { StockItem } from "@/components/StockItem/StockItem";
import { MOCK_STOCK_WATCHLIST_DATA } from "@/mock-data/stock-watchlist.mockdata";
import { ButtonSet } from "@/components/ButtonSet/ButtonSet";

export const DashboardWatchList = () => {
  return (
    <Card cardTitle="Watchlist" className={styles["dashboard-watchlist"]}>
      <ButtonSet
        buttons={[
          { label: "Price" },
          { label: "Gainers", style: "outline" },
          { label: "Losers", style: "outline" },
        ]}
      />
      <div className={styles["stock-list"]}>
        {MOCK_STOCK_WATCHLIST_DATA.map((stock, i) => (
          <StockItem
            key={i}
            name={stock.name}
            ticker={stock.ticker}
            currentPrice={stock.currentPrice}
            priceChange={stock.priceChange}
          />
        ))}
      </div>
    </Card>
  );
};
