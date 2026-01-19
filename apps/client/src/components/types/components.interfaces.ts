import type React from "react";
import type { ButtonStyle, SortOrder } from "./components.types";

export interface ButtonComponentProps {
  label: string;
  style?: ButtonStyle;
}

export interface ButtonSetComponentProps {
  buttons: ButtonComponentProps[];
  className?: string;
}

export interface CardComponentProps {
  children: React.ReactNode;
  cardTitle?: string;
  className?: string;
}

export interface HeadingWithButtonsProps {
  heading: string;
  buttons: ButtonComponentProps[];
}

export interface ListSorter {
  name: string;
  active: boolean;
  sortOrder: SortOrder;
}

export interface ListSortersComponentProps {
  sorters: ListSorter[];
}

export interface LineGraphPoint {
  time: string;
  value: number;
}

export interface AreaChartComponentProps {
  chartData: LineGraphPoint[];
  tooltipLabel: string;
}
