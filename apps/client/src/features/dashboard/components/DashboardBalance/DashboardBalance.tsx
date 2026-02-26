import styles from "./DashboardBalance.module.scss";
import { Card } from "@/components/Card/Card";
import { formatChangeColour } from "@/utlities/utilities.service";
import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { GeneralModal } from "@/components/modals/GeneralModal/GeneralModal";

export const DashboardBalance = () => {
  const balanceAmount = useAppSelector(
    (state) => state.dashboard.balanceAmount,
  );
  const balanceReturn = useAppSelector(
    (state) => state.dashboard.balanceReturn,
  );

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");

  const closeModal = () => setOpenModal(!openModal);

  const openDepositModal = () => {
    setOpenModal(true);
    setModalTitle("Select Amount To Deposit");
  };

  const openWithdrawModal = () => {
    setOpenModal(true);
    setModalTitle("Select Amount To Withdraw");
  };

  return (
    <Card cardTitle="Account Balance" className={styles["dashboard-balance"]}>
      <div className={styles["balance"]}>
        <span className={styles["balance-amount"]}>£{balanceAmount}</span>
        <span className={formatChangeColour(balanceReturn)}>
          {`${balanceReturn > 0 ? " +" : ""}${balanceReturn}`} (7.12%)
        </span>
      </div>
      <ButtonSet
        buttons={[
          { label: "Deposit", onClick: () => openDepositModal() },
          {
            label: "Withdraw",
            onClick: () => openWithdrawModal(),
            style: "outline",
          },
        ]}
      />
      <GeneralModal
        modalOpen={openModal}
        closeModal={closeModal}
        title={modalTitle}
      >
        <div>I AM THE MODALS CONTENT</div>
      </GeneralModal>
    </Card>
  );
};
