import { Card } from "@/components/Card/Card";
import styles from "./DashboardMarketOverview.module.scss";
// import { MarketIndicator } from "@/components/MarketIndicator/MarketIndicator";
// import { useMarketIndicators } from "@/hooks/dashboard.hooks";

export const DashboardMarketOverview = () => {
  // const { data } = useMarketIndicators();

  return (
    <Card
      cardTitle="Market Overview"
      className={styles["dashboard-market-overview"]}
    >
      <div className={styles["market-indicator-list"]}>
        {/* {data?.map((mi) => (
          <MarketIndicator
            key={mi.name}
            name={mi.name}
            price={mi.value}
            change={mi.change}
          />
        ))} */}
      </div>
    </Card>
  );
};
