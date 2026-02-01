import { Card } from "@/components/Card/Card";
import styles from "./DashboardWatchList.module.scss";
import { StockItem } from "@/components/StockItem/StockItem";
import { MOCK_STOCK_WATCHLIST_DATA } from "@/mock-data/stock-watchlist.mockdata";
import type { ButtonComponentProps } from "@/components/types/components.interfaces";
import { HeadingWithButtons } from "@/components/HeadingWithButtons/HeadingWithButtons";
import { StockList } from "@/components/StockList/StockList";

export const DashboardWatchList = () => {
  const watchlistFilterButtons: ButtonComponentProps[] = [
    { label: "Price" },
    { label: "Gainers", style: "outline" },
    { label: "Losers", style: "outline" },
  ];

  return (
    <Card className={styles["dashboard-watchlist"]}>
      <HeadingWithButtons
        heading="Watchlist"
        buttons={watchlistFilterButtons}
      />
      <StockList>
        {MOCK_STOCK_WATCHLIST_DATA.map((stock, i) => (
          <StockItem
            key={i}
            name={stock.name}
            ticker={stock.ticker}
            currentPrice={stock.currentPrice}
            priceChange={stock.priceChange}
            priceChangePercentage={stock.priceChangePercentage}
          />
        ))}
      </StockList>
    </Card>
  );
};
