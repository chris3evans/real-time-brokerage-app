import type { CardComponentProps } from "../types/components.interfaces";
import styles from "./Card.module.scss";

export const Card = ({
  children,
  cardTitle,
  className,
}: CardComponentProps) => {
  return (
    <div className={`${styles["card"]} ${className}`}>
      <h4>{cardTitle}</h4>
      {children}
    </div>
  );
};
