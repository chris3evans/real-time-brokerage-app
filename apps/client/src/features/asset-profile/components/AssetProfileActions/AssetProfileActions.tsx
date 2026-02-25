import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import styles from "./AssetProfileActions.module.scss";
import { useState } from "react";
import { BuySellModal } from "@/components/modals/BuySellModal/BuySellModal";
import { AssetProfileActionsComponentProps } from "../../types/asset-profile.interfaces";
import { StockItem } from "@project/shared-types";

export const AssetProfileActions = ({
  stock,
}: AssetProfileActionsComponentProps) => {
  const [modalActionType, setModalActionType] = useState<
    "buy" | "sell" | "watchlist" | null
  >(null);
  const closeModal = () => setModalActionType(null);

  return (
    <div className={styles["asset-actions"]}>
      <ButtonSet
        className={styles["buttons-vertical"]}
        buttons={[
          { label: "Buy", onClick: () => setModalActionType("buy") },
          {
            label: "Sell",
            style: "outline",
            onClick: () => setModalActionType("sell"),
          },
          {
            label: "Add to Watchlist",
            style: "outline",
            onClick: () => setModalActionType("watchlist"),
          },
        ]}
      />
      <BuySellModal
        actionType={modalActionType ?? "buy"}
        stock={stock as StockItem}
        modalOpen={modalActionType !== null}
        closeModal={closeModal}
      />
    </div>
  );
};
