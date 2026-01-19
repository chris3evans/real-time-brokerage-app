import styles from "./MarketIndicator.module.scss";
import { formatChangeColour } from "@/utlities/utilities.service";
import type { MarketIndicatorProps } from "@project/shared-types";
import clsx from "clsx";

export const MarketIndicator = ({
  name,
  price,
  change,
}: MarketIndicatorProps) => {
  const percentageChange = ((change / (price - change)) * 100).toFixed(2);

  return (
    <div className={clsx(styles["indicator"], "investable")}>
      <h5>{name}</h5>
      <div className={styles["indicator-value"]}>
        <span className={styles["indicator-price"]}>{price} </span>
        <span
          className={`${styles["indicator-change"]} ${formatChangeColour(change)}`}
        >
          {change} ({percentageChange})
        </span>
      </div>
    </div>
  );
};
