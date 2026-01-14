import { Card } from "@/components/Card/Card";
import styles from "./DashboardMarketOverview.module.scss";
import { MarketIndicator } from "@/components/MarketIndicator/MarketIndicator";

export const DashboardMarketOverview = () => {
  return (
    <Card className={styles["dashboard-market-overview"]}>
      <h4>Market Overview</h4>
      <MarketIndicator />
      {/* S&P 500 */}
      {/* Dow Jones */}
      {/* NASDAQ */}
      {/* FTSE100 */}
      {/* NIKEI */}
      {/* GOLD */}
      {/* OIL */}
      {/* SILVER */}
      {/* GBP/USD */}
      {/* EUR/USD */}
      {/* YEN/USD */}
    </Card>
  );
};
