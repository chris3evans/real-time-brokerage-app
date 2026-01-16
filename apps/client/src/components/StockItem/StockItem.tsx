import type { StockItemProps } from "../types/components.interfaces";
import styles from "./StockItem.module.scss";
import { formatChangeColour } from "@/utlities/utilities.service";

export const StockItem = ({
  name,
  ticker,
  currentPrice,
  priceChange,
}: StockItemProps) => {
  return (
    <div className={styles["stock-item"]}>
      <div className={styles["stock-name"]}>
        <h5>{ticker}</h5>
        <span>{name}</span>
      </div>
      <div className={styles["stock-price"]}>
        <h5>{currentPrice}</h5>
        <span className={formatChangeColour(priceChange)}>{priceChange}</span>
      </div>
    </div>
  );
};
