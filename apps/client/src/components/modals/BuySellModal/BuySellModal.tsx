import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { BuySellModalComponentProps } from "@/components/types/components.interfaces";
import { Box, Modal } from "@mui/material";
import styles from "./BuySellModal.module.scss";

export const BuySellModal = ({
  stock,
  actionType,
  modalOpen,
  closeModal,
}: BuySellModalComponentProps) => {
  const handleOrderQuantityInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    console.log(event.target.value, "order quantity");
  };

  const handleOrderSumInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    console.log(event.target.value, "order sum");
  };

  return (
    <Modal open={modalOpen} onClose={closeModal}>
      <Box className={styles["modal-container"]}>
        <h4>
          {`${actionType[0].toLocaleUpperCase()}${actionType.slice(1)}`} 10
          shares of {stock?.name} ({stock?.ticker})
        </h4>

        <div className={styles["quantity-handler"]}>
          <Input
            placeholder="0"
            type="number"
            label="Order Quantity"
            onChange={(e) => handleOrderQuantityInput(e)}
          />
          <Button
            aria-label="Alternate between selecting by quantity or price"
            label="Alternate"
          />
          <Input
            placeholder="0"
            type="0"
            label="Order Sum"
            onChange={(e) => handleOrderSumInput(e)}
          />
        </div>
        <Button label="Confirm Buy" />
      </Box>
    </Modal>
  );
};
