import { Card } from "@/components/Card/Card";
import styles from "./DashboardMarketOverview.module.scss";
import { useGetMarketIndicators } from "@/hooks/dashboard.hooks";
import { MarketIndicator } from "@/components/MarketIndicator/MarketIndicator";

export const DashboardMarketOverview = () => {
  const { data: marketIndicators } = useGetMarketIndicators();

  console.log(marketIndicators);

  return (
    <Card
      cardTitle="Market Overview"
      className={styles["dashboard-market-overview"]}
    >
      <div className={styles["market-indicator-list"]}>
        {marketIndicators?.map((mi) => (
          <MarketIndicator
            key={mi.name}
            name={mi.name}
            currentValue={mi.currentValue}
            valueChange={mi.valueChange}
            valueChangePercentage={mi.valueChangePercentage}
          />
        ))}
      </div>
    </Card>
  );
};
