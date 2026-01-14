import styles from "./MarketIndicator.module.scss";

export const MarketIndicator = () => {
  return (
    <div className={styles["indicator"]}>
      <div className={styles["indicator-heading"]}>
        <img src="" className={styles["indicator-symbol"]} />
        <span className={styles["indicator-name"]}>FTSE 100</span>
      </div>
      <div className={styles["indicator-value"]}>
        <span className={styles["indicator-price"]}>7,125.50</span>
        <span className={styles["indicator-change"]}>-25.30 (-0.35%)</span>
      </div>
    </div>
  );
};
