import { Card } from "@/components/Card/Card";
import styles from "./PriceHistoryPerformance.module.scss";
import { AreaChartComponent } from "@/components/AreaChart/AreaChartComponent";
import type { DurationButton } from "@/components/types/components.interfaces";
import { HeadingWithButtons } from "@/components/HeadingWithButtons/HeadingWithButtons";
import { PriceHistoryPerformanceComponentProps } from "@dashboard-types/dashboard.interfaces";
import { useEffect, useState } from "react";
import { Duration } from "@project/shared-types";

export const PriceHistoryPerformance = ({
  chartData,
  heading,
  tooltipLabel,
  trend,
  handleDurationChange,
}: PriceHistoryPerformanceComponentProps) => {
  const [activeDuration, setActiveDuration] = useState<Duration>("second");

  useEffect(() => {
    handleDurationChange(activeDuration);
  }, [activeDuration, handleDurationChange]);

  const portfolioPerformanceDurationButtons: DurationButton[] = [
    {
      value: "second",
      label: "1S",
      style: activeDuration === "second" ? "filled" : "outline",
      onClick: () => setActiveDuration("second"),
    },
    {
      value: "minute",
      label: "1M",
      style: activeDuration === "minute" ? "filled" : "outline",
      onClick: () => setActiveDuration("minute"),
    },
    {
      value: "hour",
      label: "1H",
      style: activeDuration === "hour" ? "filled" : "outline",
      onClick: () => setActiveDuration("hour"),
    },
    {
      value: "day",
      label: "1D",
      style: activeDuration === "day" ? "filled" : "outline",
      onClick: () => setActiveDuration("day"),
    },
    {
      value: "week",
      label: "1W",
      style: activeDuration === "week" ? "filled" : "outline",
      onClick: () => setActiveDuration("week"),
    },
    {
      value: "month",
      label: "1M",
      style: activeDuration === "month" ? "filled" : "outline",
      onClick: () => setActiveDuration("month"),
    },
    {
      value: "year",
      label: "1Y",
      style: activeDuration === "year" ? "filled" : "outline",
      onClick: () => setActiveDuration("year"),
    },
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
