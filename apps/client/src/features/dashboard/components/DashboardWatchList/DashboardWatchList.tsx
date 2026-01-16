import { Card } from "@/components/Card/Card";
import styles from "./DashboardWatchlist.module.scss";
import { StockItem } from "@/components/StockItem/StockItem";
import { MOCK_STOCK_WATCHLIST_DATA } from "@/mock-data/stock-watchlist.mockdata";

export const DashboardWatchList = () => {
  return (
    <Card cardTitle="Watchlist" className={styles["dashboard-watchlist"]}>
      Dashboard Watchlist Component
      {/* Filter buttons */}
      <div className={styles["stock-list"]}>
        {MOCK_STOCK_WATCHLIST_DATA.map((stock) => (
          <StockItem
            ticker={stock.ticker}
            currentPrice={stock.currentPrice}
            priceChange={stock.priceChange}
          />
        ))}
      </div>
    </Card>
  );
};
