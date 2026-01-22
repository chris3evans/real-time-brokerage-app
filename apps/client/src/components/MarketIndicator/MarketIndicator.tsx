import styles from "./MarketIndicator.module.scss";
import { formatChangeColour } from "@/utlities/utilities.service";
import clsx from "clsx";
import { MarketIndicatorComponentProps } from "@components/types/components.interfaces";

export const MarketIndicator = ({
  name,
  price,
  change,
}: MarketIndicatorComponentProps) => {
  const percentageChange = ((change / (price - change)) * 100).toFixed(2);

  return (
    <div className={clsx(styles["indicator"], "investable")}>
      <h5>{name}</h5>
      <div className={styles["indicator-value"]}>
        <span
          key={price}
          className={clsx(styles["indicator-price"], "text-flash")}
        >
          {price}
        </span>
        <span key={change} className={formatChangeColour(change)}>
          {change} ({percentageChange})
        </span>
      </div>
    </div>
  );
};
