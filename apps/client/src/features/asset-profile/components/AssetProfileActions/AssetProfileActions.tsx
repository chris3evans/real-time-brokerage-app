import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import styles from "./AssetProfileActions.module.scss";
import { useState } from "react";
import { BuySellModal } from "@/components/modals/BuySellModal/BuySellModal";
import { AssetProfileActionsComponentProps } from "../../types/asset-profile.interfaces";

export const AssetProfileActions = ({
  stock,
}: AssetProfileActionsComponentProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles["asset-actions"]}>
      <ButtonSet
        className={styles["buttons-vertical"]}
        buttons={[
          { label: "Buy", onClick: openModal },
          { label: "Sell", style: "outline", onClick: openModal },
          { label: "Add to Watchlist", style: "outline", onClick: openModal },
        ]}
      />
      <BuySellModal
        actionType={"buy"}
        stock={stock}
        modalOpen={modalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};
