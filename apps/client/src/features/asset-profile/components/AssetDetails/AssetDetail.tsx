import { useGetAssetDetails } from "@/hooks/search.hooks";
import styles from "./AssetDetails.module.scss";
import { AssetDetailsComponentProps } from "../../types/asset-profile.interfaces";

export const AssetDetails = ({ assetTicker }: AssetDetailsComponentProps) => {
  const { data: assetDetails } = useGetAssetDetails(assetTicker);

  return (
    <div className={styles["asset-details"]}>
      <div className={styles["asset-overview"]}>
        <h5>Company Overview</h5>
        <p className="thin">{assetDetails?.overview}</p>
      </div>
      <div className={styles["details"]}>
        <div className={styles["detail"]}>
          <span>Market Cap:</span>
          <span className="thin">{assetDetails?.marketCap}</span>
        </div>
        <div className={styles["detail"]}>
          <span>Trading Volume:</span>
          <span className="thin">{assetDetails?.tradingVolume}</span>
        </div>
        <div className={styles["detail"]}>
          <span>PE Ratio:</span>
          <span className="thin">{assetDetails?.peRatio}</span>
        </div>
        <div className={styles["detail"]}>
          <span>Dividend Yield:</span>
          <span className="thin">{assetDetails?.dividendYield}</span>
        </div>
        <div className={styles["detail"]}>
          <span>Dividend Amount:</span>
          <span className="thin">{assetDetails?.dividendAmount}</span>
        </div>
        <div className={styles["detail"]}>
          <span>Revenue Per Share:</span>
          <span className="thin">{assetDetails?.revenuePerShare}</span>
        </div>
        <div className={styles["detail"]}>
          <span>Net Income Per Share:</span>
          <span className="thin">{assetDetails?.netIncomePerShare}</span>
        </div>
        <div className={styles["detail"]}>
          <span>Earnings Per Share:</span>
          <span className="thin">{assetDetails?.earningsPerShare}</span>
        </div>
        <div className={styles["detail"]}>
          <span>Revenue Growth:</span>
          <span className="thin">{assetDetails?.revenueGrowth}</span>
        </div>
        <div className={styles["detail"]}>
          <span>EPS Growth:</span>
          <span className="thin">{assetDetails?.peRatio}</span>
        </div>
        <div className={styles["detail"]}>
          <span>Gross Profit Margin:</span>
          <span className="thin">{assetDetails?.grossProfitMargin}</span>
        </div>
        <div className={styles["detail"]}>
          <span>Net Profit Margin:</span>
          <span className="thin">{assetDetails?.netProfitMargin}</span>
        </div>
      </div>
    </div>
  );
};
