import type React from "react";
import type { ButtonStyle } from "./components.types";

export interface ButtonComponentProps {
  label: string;
  style?: ButtonStyle;
}

export interface CardComponentProps {
  children: React.ReactNode;
  cardTitle?: string;
  className?: string;
}

export interface MarketIndicatorProps {
  name: string;
  price: number;
  change: number;
}

export interface LineGraphPoint {
  time: string;
  value: number;
}

export interface AreaChartComponentProps {
  chartData: LineGraphPoint[];
  tooltipLabel: string;
}

export interface StockItemProps {
  name: string;
  ticker: string;
  currentPrice: number;
  priceChange: number;
  marketCap?: number;
}
