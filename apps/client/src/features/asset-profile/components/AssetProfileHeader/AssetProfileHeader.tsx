import clsx from "clsx";
import { AssetProfileComponentProps } from "../../types/asset-profile.interfaces";
import styles from "./AssetProfileHeader.module.scss";
import { formatChangeColour } from "@/utlities/utilities.service";

export const AssetProfileHeader = ({
  assetName,
  assetTicker,
  currentPrice,
  change,
  changePercentage,
}: AssetProfileComponentProps) => {
  return (
    <div className={styles["header"]}>
      <h4>{assetName}</h4>
      <span>{assetTicker}</span>
      <h1 className="text-flash">${currentPrice}</h1>
      <div
        key={change}
        className={clsx(styles["change"], formatChangeColour(change))}
      >
        <span>
          {change > 0 ? "+$" : ""}
          {change}
        </span>
        <span>({changePercentage}%)</span>
      </div>
    </div>
  );
};
