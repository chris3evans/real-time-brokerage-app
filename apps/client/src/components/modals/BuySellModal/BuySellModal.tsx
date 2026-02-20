import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { BuySellModalComponentProps } from "@/components/types/components.interfaces";
import { Box, Modal } from "@mui/material";

export const BuySellModal = ({
  stock,
  actionType,
  modalOpen,
  closeModal,
}: BuySellModalComponentProps) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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

  // console.log(stock, actionType);

  return (
    <Modal open={modalOpen} onClose={closeModal}>
      {/* Header - buy x shares / $x of AMAZON */}
      {/* Share amount | switch button | money amount */}
      {/* Confirm buy */}
      <Box sx={style}>
        <h4>
          {`${actionType[0].toLocaleUpperCase()}${actionType.slice(1)}`} 10
          shares of {stock?.name} ({stock?.ticker})
        </h4>

        <Input
          placeholder="0"
          type="number"
          label="Order Quantity"
          onChange={(e) => handleOrderQuantityInput(e)}
        />
        <button>Alternate</button>
        <Input
          placeholder="0"
          type="0"
          label="Order Sum"
          onChange={(e) => handleOrderSumInput(e)}
        />

        <Button label="Confirm Buy" />
      </Box>
    </Modal>
  );
};
