import { Card } from "@/components/Card/Card";
import styles from "./DashboardPortfolioPerformance.module.scss";
import { PORTFOLIO_PERFORMANCE_MOCKDATA } from "@/mock-data/portfolio-performance.mockdata";
import { AreaChartComponent } from "@/components/AreaChart/AreaChartComponent";
import type { ButtonComponentProps } from "@/components/types/components.interfaces";
import { HeadingWithButtons } from "@/components/HeadingWithButtons/HeadingWithButtons";

export const DashboardPortfolioPerformance = () => {
  const portfolioPerformanceDurationButtons: ButtonComponentProps[] = [
    { label: "1D" },
    { label: "1W", style: "outline" },
    { label: "1M", style: "outline" },
    { label: "6M", style: "outline" },
    { label: "1Y", style: "outline" },
    { label: "5Y", style: "outline" },
  ];

  return (
    <Card className={styles["portfolio-performance"]}>
      <HeadingWithButtons
        heading="Portfolio Performance"
        buttons={portfolioPerformanceDurationButtons}
      />
      <AreaChartComponent
        tooltipLabel="Portfolio Value"
        chartData={PORTFOLIO_PERFORMANCE_MOCKDATA}
      />
    </Card>
  );
};
