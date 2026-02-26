import styles from "./DashboardBalance.module.scss";
import { Card } from "@/components/Card/Card";
import { formatChangeColour } from "@/utlities/utilities.service";
import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { GeneralModal } from "@/components/modals/GeneralModal/GeneralModal";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";

export const DashboardBalance = () => {
  const balanceAmount = useAppSelector((state) => state.user.balance);

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
        <span className={formatChangeColour(10)}>
          {`${10 > 0 ? " +" : ""}${10}`} (7.12%)
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
        <Input type="number" />
        <Button label="Confirm" />
      </GeneralModal>
    </Card>
  );
};
