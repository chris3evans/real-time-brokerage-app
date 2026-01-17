import { Card } from "@/components/Card/Card";
import styles from "./DashboardPortfolioOverview.module.scss";
import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import { MOCK_STOCK_WATCHLIST_DATA } from "@/mock-data/stock-watchlist.mockdata";
import { StockItem } from "@/components/StockItem/StockItem";

export const DashboardPortfolioOverview = () => {
  return (
    <Card className={styles["dashboard-portfolio-overview"]}>
      <div className={styles["portfolio-overview-heading"]}>
        <h4>Portfolio Performance</h4>
        <ButtonSet
          buttons={[
            { label: "All" },
            { label: "Gainers", style: "outline" },
            { label: "Losers", style: "outline" },
          ]}
        />
      </div>
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
