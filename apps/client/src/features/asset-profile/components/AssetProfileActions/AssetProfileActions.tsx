import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import styles from "./AssetProfileActions.module.scss";
import { useState } from "react";
import { BuySellModal } from "@/components/modals/BuySellModal/BuySellModal";

export const AssetProfileActions = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles["asset-actions"]}>
      <ButtonSet
        className={styles["buttons-vertical"]}
        buttons={[
          { label: "Buy" },
          { label: "Sell", style: "outline", onClick: openModal },
          { label: "Add to Watchlist", style: "outline" },
        ]}
      />
      <BuySellModal modalOpen={modalOpen} closeModal={closeModal} />
    </div>
  );
};
