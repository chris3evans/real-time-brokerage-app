import { Card } from "@/components/Card/Card";
import styles from "./DashboardPortfolioPerformance.module.scss";
import { PORTFOLIO_PERFORMANCE_MOCKDATA } from "@/mock-data/portfolio-performance.mockdata";
import { Button } from "@/components/Button/Button";
import { AreaChartComponent } from "@/components/AreaChart/AreaChartComponent";

export const DashboardPortfolioPerformance = () => {
  return (
    <Card className={styles["portfolio-performance"]}>
      <div className={styles["portfolio-performance-heading"]}>
        <h4>Portfolio Performance</h4>
        <div className={styles["duration-selector"]}>
          <Button label="1D" />
          <Button label="1W" style="outline" />
          <Button label="1M" style="outline" />
          <Button label="6M" style="outline" />
          <Button label="1Y" style="outline" />
          <Button label="5Y" style="outline" />
        </div>
      </div>
      <AreaChartComponent
        tooltipLabel="Portfolio Value"
        chartData={PORTFOLIO_PERFORMANCE_MOCKDATA}
      />
    </Card>
  );
};
