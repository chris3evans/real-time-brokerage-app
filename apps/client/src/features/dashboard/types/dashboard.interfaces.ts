import { LineGraphPoint, Trend } from "@project/shared-types";

export interface PriceHistoryPerformanceComponentProps {
  chartData: LineGraphPoint[];
  heading: string;
  tooltipLabel: string;
  trend: Trend;
}
