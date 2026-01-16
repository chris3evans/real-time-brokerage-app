import { Card } from "@/components/Card/Card";
import styles from "./DashboardWatchlist.module.scss";
import { StockItem } from "@/components/StockItem/StockItem";
import { MOCK_STOCK_WATCHLIST_DATA } from "@/mock-data/stock-watchlist.mockdata";
import { Button } from "@/components/Button/Button";

export const DashboardWatchList = () => {
  return (
    <Card cardTitle="Watchlist" className={styles["dashboard-watchlist"]}>
      {/* Filter buttons */}
      <div className={styles["list-filters"]}>
        <Button label="Price" />
        <Button label="Gains" style="outline" />
        <Button label="Losses" style="outline" />
      </div>
      <div className={styles["stock-list"]}>
        {MOCK_STOCK_WATCHLIST_DATA.map((stock) => (
          <StockItem
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
