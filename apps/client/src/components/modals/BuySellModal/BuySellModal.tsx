import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { BuySellModalComponentProps } from "@/components/types/components.interfaces";
import { Box, Modal } from "@mui/material";
import styles from "./BuySellModal.module.scss";
import { useState } from "react";

export const BuySellModal = ({
  stock,
  actionType,
  modalOpen,
  closeModal,
}: BuySellModalComponentProps) => {
  const [orderInPrice, setOrderInPrice] = useState<boolean>(false);

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

  const alternateOrderMethod = (): void => {
    setOrderInPrice(!orderInPrice);
  };

  const handleInputFocus = (
    event: React.FocusEvent<HTMLInputElement>,
  ): void => {
    if (event.target.id === "price") {
      setOrderInPrice(true);
    }
    if (event.target.id === "number-shares") {
      setOrderInPrice(false);
    }
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
            id="number-shares"
            placeholder="0"
            type="number"
            label="Num Shares"
            onChange={(e) => handleOrderQuantityInput(e)}
            onFocus={(e) => handleInputFocus(e)}
            disabled={orderInPrice}
          />
          <div className={styles["button-alternate"]}>
            <Button
              style="outline"
              aria-label="Alternate between selecting by quantity or price"
              label="Alternate"
              onClick={() => alternateOrderMethod()}
            />
          </div>
          <Input
            id="price"
            placeholder="0"
            type="0"
            label="Price"
            onChange={(e) => handleOrderSumInput(e)}
            onFocus={(e) => handleInputFocus(e)}
            disabled={!orderInPrice}
          />
        </div>
        <div className={styles["button-confirm"]}>
          <Button label="Confirm Buy" />
        </div>
      </Box>
    </Modal>
  );
};
