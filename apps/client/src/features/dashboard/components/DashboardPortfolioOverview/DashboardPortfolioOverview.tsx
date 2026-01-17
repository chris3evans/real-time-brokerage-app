import { Card } from "@/components/Card/Card";
import styles from "./DashboardPortfolioOverview.module.scss";
import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import { StockItem } from "@/components/StockItem/StockItem";
import { MOCK_STOCK_PORTFOLIO_DATA } from "@/mock-data/stock-portfolio.mockdata";
import { ListSorters } from "@/components/ListSorters/ListSorters";
import type {
  ButtonComponentProps,
  ListSorter,
} from "@/components/types/components.interfaces";

export const DashboardPortfolioOverview = () => {
  const filterButtons: ButtonComponentProps[] = [
    { label: "All" },
    { label: "Gainers", style: "outline" },
    { label: "Losers", style: "outline" },
  ];
  const sorterButtons: ListSorter[] = [
    {
      name: "Name",
      active: false,
      sortOrder: null,
    },
    {
      name: "Price",
      active: false,
      sortOrder: null,
    },
    {
      name: "Units",
      active: false,
      sortOrder: null,
    },
    {
      name: "Principal",
      active: false,
      sortOrder: null,
    },
    {
      name: "Value",
      active: false,
      sortOrder: null,
    },
  ];

  return (
    <Card className={styles["dashboard-portfolio-overview"]}>
      <div className={styles["portfolio-overview-heading"]}>
        <h4>Portfolio Performance</h4>
        <ButtonSet buttons={filterButtons} />
      </div>
      <div className={styles["stock-list"]}>
        <ListSorters sorters={sorterButtons} />
        {MOCK_STOCK_PORTFOLIO_DATA.map((stock, i) => (
          <StockItem
            key={i}
            name={stock.name}
            ticker={stock.ticker}
            currentPrice={stock.currentPrice}
            priceChange={stock.priceChange}
            units={stock.units}
            positionPrincipal={stock.positionPrincipal}
            positionValue={stock.positionValue}
          />
        ))}
      </div>
    </Card>
  );
};
