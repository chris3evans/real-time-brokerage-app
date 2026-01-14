import type { CardComponentProps } from "../types/components.interfaces";
import styles from "./Card.module.scss";

export const Card = ({ children, className }: CardComponentProps) => {
  return <div className={`${styles["card"]} ${className}`}>{children}</div>;
};
