import { Card } from "@/components/Card/Card";
import styles from "./DashboardMarketOverview.module.scss";
import { MarketIndicator } from "@/components/MarketIndicator/MarketIndicator";

export const DashboardMarketOverview = () => {
  return (
    <Card
      cardTitle="Market Overview"
      className={styles["dashboard-market-overview"]}
    >
      <div className={styles["market-indicator-list"]}>
        <MarketIndicator name={"S&P 500"} price={6900} change={100} />
        <MarketIndicator name={"Dow Jones"} price={49500} change={350} />
        <MarketIndicator name={"NASDAQ"} price={23667} change={195} />
        <MarketIndicator name={"FTSE 100"} price={10000} change={57} />
        <MarketIndicator name={"NIKKEI 225"} price={54000} change={-200} />
        <MarketIndicator name={"Gold"} price={4615} change={68} />
        <MarketIndicator name={"Oil (crude)"} price={58} change={4} />
        <MarketIndicator name={"Silver"} price={89} change={0.5} />
        <MarketIndicator name={"GBP/USD"} price={1.34} change={0.02} />
        <MarketIndicator name={"EUR/USD"} price={1.16} change={0.01} />
        <MarketIndicator name={"YEN/USD"} price={0.0065} change={0.0005} />
      </div>
    </Card>
  );
};
