import { Card } from "@/components/Card/Card";
import styles from "./DashboardPortfolioPerformance.module.scss";
import { PORTFOLIO_PERFORMANCE_MOCKDATA } from "@/mock-data/portfolio-performance.mockdata";
import { AreaChartComponent } from "@/components/AreaChart/AreaChartComponent";
import { ButtonSet } from "@/components/ButtonSet/ButtonSet";

export const DashboardPortfolioPerformance = () => {
  return (
    <Card className={styles["portfolio-performance"]}>
      <div className={styles["portfolio-performance-heading"]}>
        <h4>Portfolio Performance</h4>
        <ButtonSet
          className={styles["duration-selector"]}
          buttons={[
            { label: "1D" },
            { label: "1W", style: "outline" },
            { label: "1M", style: "outline" },
            { label: "6M", style: "outline" },
            { label: "1Y", style: "outline" },
            { label: "5Y", style: "outline" },
          ]}
        />
      </div>
      <AreaChartComponent
        tooltipLabel="Portfolio Value"
        chartData={PORTFOLIO_PERFORMANCE_MOCKDATA}
      />
    </Card>
  );
};
