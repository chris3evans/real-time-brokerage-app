import styles from "./MarketIndicator.module.scss";

export const MarketIndicator = () => {
  return (
    <div className={styles["indicator"]}>
      <h5>FTSE 100</h5>
      <div className={styles["indicator-value"]}>
        <span className={styles["indicator-price"]}>7,125.50 </span>
        <span className={styles["indicator-change"]}>-25.30 (-0.35%)</span>
      </div>
    </div>
  );
};
