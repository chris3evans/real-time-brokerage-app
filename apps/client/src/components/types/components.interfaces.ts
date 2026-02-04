import type React from "react";
import type { ButtonStyle, SortOrder } from "./components.types";
import type { Clickable } from "@/types/app.interfaces";
import { LineGraphPoint } from "@project/shared-types";

export interface ButtonComponentProps extends Clickable {
  label: string;
  style?: ButtonStyle;
}

export interface IconButtonComponentProps extends Clickable {
  children: React.ReactNode;
  className?: string;
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

export interface ViewComponentProps {
  children: React.ReactNode;
  className?: string;
}

export interface StockListComponentProps {
  children: React.ReactNode;
  className?: string;
  autoHeight?: boolean;
}

export interface HeadingWithButtonsComponentProps {
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

export interface AreaChartComponentProps {
  chartData: LineGraphPoint[];
  tooltipLabel: string;
}

export interface MarketIndicatorComponentProps extends Clickable {
  name: string;
  currentValue: number;
  valueChange: number;
  valueChangePercentage: number;
}
