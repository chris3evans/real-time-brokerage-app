import type { StockPositionItem } from "../types/components.interfaces";
import styles from "./StockItem.module.scss";
import { formatChangeColour } from "@/utlities/utilities.service";
import clsx from "clsx";

export const StockItem = ({
  name,
  ticker,
  currentPrice,
  priceChange,
  units,
  positionPrincipal,
  positionValue,
}: StockPositionItem) => {
  return (
    <div className={clsx(styles["stock-item"], "investable")}>
      <div className={styles["stock-name"]}>
        <h5>{ticker}</h5>
        <span>{name}</span>
      </div>
      <div className={styles["stock-price"]}>
        <h5>{currentPrice}</h5>
        <span className={formatChangeColour(priceChange)}>{priceChange}</span>
      </div>
      {units ? (
        <div className={styles["stock-name"]}>
          <h5>{units}</h5>
        </div>
      ) : (
        ""
      )}
      {positionPrincipal ? (
        <div className={styles["stock-name"]}>
          <h5>{positionPrincipal}</h5>
        </div>
      ) : (
        ""
      )}
      {positionValue && positionPrincipal ? (
        <div className={styles["stock-name"]}>
          <h5 className={formatChangeColour(positionValue - positionPrincipal)}>
            {positionValue}
          </h5>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
