import { Card } from "@/components/Card/Card";
import styles from "./PriceHistoryPerformance.module.scss";
import { AreaChartComponent } from "@/components/AreaChart/AreaChartComponent";
import type { ButtonComponentProps } from "@/components/types/components.interfaces";
import { HeadingWithButtons } from "@/components/HeadingWithButtons/HeadingWithButtons";
import { PriceHistoryPerformanceComponentProps } from "@dashboard-types/dashboard.interfaces";

export const PriceHistoryPerformance = ({
  chartData,
  heading,
  tooltipLabel,
  trend,
}: PriceHistoryPerformanceComponentProps) => {
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
        heading={heading}
        buttons={portfolioPerformanceDurationButtons}
      />
      <AreaChartComponent
        trend={trend}
        tooltipLabel={tooltipLabel}
        chartData={chartData}
      />
    </Card>
  );
};
