import styles from "./MarketIndicator.module.scss";
import { formatChangeColour } from "@/utlities/utilities.service";
import clsx from "clsx";
import { MarketIndicatorComponentProps } from "@components/types/components.interfaces";

export const MarketIndicator = ({
  name,
  currentValue,
  valueChange,
  valueChangePercentage,
}: MarketIndicatorComponentProps) => {
  return (
    <div className={clsx(styles["indicator"], "investable")}>
      <h5>{name}</h5>
      <div className={styles["indicator-value"]}>
        <span
          key={currentValue}
          className={clsx(styles["indicator-price"], "text-flash")}
        >
          {currentValue}
        </span>
        <span key={valueChange} className={formatChangeColour(valueChange)}>
          {valueChange} ({valueChangePercentage})
        </span>
      </div>
    </div>
  );
};
