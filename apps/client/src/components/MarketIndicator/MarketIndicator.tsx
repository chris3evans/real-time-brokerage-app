import type { MarketIndicatorProps } from "../types/components.interfaces";
import styles from "./MarketIndicator.module.scss";

export const MarketIndicator = ({
  name,
  price,
  change,
}: MarketIndicatorProps) => {
  const percentageChange = ((change / (price - change)) * 100).toFixed(2);
  let changeStatus = "";
  if (change > 0) {
    changeStatus = styles["positive"];
  }
  if (change < 0) {
    changeStatus = styles["negative"];
  }

  return (
    <div className={styles["indicator"]}>
      <h5>{name}</h5>
      <div className={styles["indicator-value"]}>
        <span className={styles["indicator-price"]}>{price} </span>
        <span className={`${styles["indicator-change"]} ${changeStatus}`}>
          {change} ({percentageChange})
        </span>
      </div>
    </div>
  );
};
