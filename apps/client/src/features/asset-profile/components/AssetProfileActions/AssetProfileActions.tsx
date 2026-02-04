import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import styles from "./AssetProfileActions.module.scss";

export const AssetProfileActions = () => {
  return (
    <div className={styles["asset-actions"]}>
      <ButtonSet
        className={styles["buttons-vertical"]}
        buttons={[
          { label: "Buy" },
          { label: "Sell", style: "outline" },
          { label: "Add to Watchlist", style: "outline" },
        ]}
      />
    </div>
  );
};
