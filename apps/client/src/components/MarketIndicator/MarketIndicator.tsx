import type { MarketIndicatorProps } from "../types/components.interfaces";
import styles from "./MarketIndicator.module.scss";

export const MarketIndicator = ({
  name,
  price,
  change,
}: MarketIndicatorProps) => {
  return (
    <div className={styles["indicator"]}>
      <h5>{name}</h5>
      <div className={styles["indicator-value"]}>
        <span className={styles["indicator-price"]}>{price} </span>
        <span className={styles["indicator-change"]}>{change} (-0.35%)</span>
      </div>
    </div>
  );
};
