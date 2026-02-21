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
        <h3>
          {`${actionType[0].toLocaleUpperCase()}${actionType.slice(1)}`} 10
          shares of {stock?.name} ({stock?.ticker})
        </h3>

        <div className={styles["quantity-handler"]}>
          <Input
            placeholder="0"
            type="number"
            label="Order Quantity"
            onChange={(e) => handleOrderQuantityInput(e)}
            // elementOrientation="horizontal"
          />
          <div className={styles["button-alternate"]}>
            <Button
              style="outline"
              aria-label="Alternate between selecting by quantity or price"
              label="Alternate"
            />
          </div>
          <Input
            placeholder="0"
            type="0"
            label="Order Sum"
            onChange={(e) => handleOrderSumInput(e)}
          />
        </div>
        <div className={styles["button-confirm"]}>
          <Button label="Confirm Buy" />
        </div>
      </Box>
    </Modal>
  );
};
