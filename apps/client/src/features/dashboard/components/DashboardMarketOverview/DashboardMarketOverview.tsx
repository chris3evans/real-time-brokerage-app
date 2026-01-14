import { Card } from "@/components/Card/Card";
import styles from "./DashboardMarketOverview.module.scss";
import { MarketIndicator } from "@/components/MarketIndicator/MarketIndicator";

export const DashboardMarketOverview = () => {
  return (
    <Card className={styles["dashboard-market-overview"]}>
      <h4>Market Overview</h4>
      <MarketIndicator />
    </Card>
  );
};
