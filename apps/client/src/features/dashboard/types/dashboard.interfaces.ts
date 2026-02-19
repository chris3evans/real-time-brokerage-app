import { Duration, LineGraphPoint, Trend } from "@project/shared-types";

export interface PriceHistoryPerformanceComponentProps {
  chartData: LineGraphPoint[];
  heading: string;
  tooltipLabel: string;
  trend: Trend;
  handleDurationChange: (duration: Duration) => void;
}
