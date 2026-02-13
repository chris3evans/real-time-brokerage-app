import { LineGraphPoint } from "@project/shared-types";

export interface PriceHistoryPerformanceComponentProps {
  chartData: LineGraphPoint[];
  heading: string;
  tooltipLabel: string;
}
