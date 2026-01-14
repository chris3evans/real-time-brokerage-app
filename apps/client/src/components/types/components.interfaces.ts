import type React from "react";
import type { ButtonStyle } from "./components.types";

export interface ButtonComponentProps {
  label: string;
  style?: ButtonStyle;
}

export interface CardComponentProps {
  children: React.ReactNode;
  className?: string;
}
