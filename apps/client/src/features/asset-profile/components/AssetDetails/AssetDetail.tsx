import styles from "./AssetDetails.module.scss";

export const AssetDetails = () => {
  return (
    <div className={styles["asset-details"]}>
      <div className={styles["asset-overview"]}>
        <h5>Company Overview</h5>
        <p className="thin">
          This is where the long paragraph containing the company overview will
          go
        </p>
      </div>
      <div className={styles["details"]}>
        <div className={styles["detail"]}>
          <span>Market Cap:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>Trading Volume:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>PE Ratio:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>Dividend Yield:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>Dividend Amount:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>Revenue Per Share:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>Net Income Per Share:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>Earnings Per Share:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>Revenue Growth:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>EPS Growth:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>Gross Profit Margin:</span>
          <span className="thin">1,000,000,000</span>
        </div>
        <div className={styles["detail"]}>
          <span>Net Profit Margin:</span>
          <span className="thin">1,000,000,000</span>
        </div>
      </div>
    </div>
  );
};
