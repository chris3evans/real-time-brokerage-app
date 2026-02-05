import { Button } from "@/components/Button/Button";
import { BuySellModalComponentProps } from "@/components/types/components.interfaces";
import { Box, Modal } from "@mui/material";

export const BuySellModal = ({
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

  return (
    <Modal open={modalOpen} onClose={closeModal}>
      {/* Header - buy x shares / $x of AMAZON */}
      {/* Share amount | switch button | money amount */}
      {/* Confirm buy */}
      <Box sx={style}>
        <h4>Buy 10 shares of Amazon (AMZN)</h4>

        <input type="number" placeholder="num shares" />
        <button>Alternate</button>
        <input type="number" placeholder="num shares" />

        <Button label="Confirm Buy" />
      </Box>
    </Modal>
  );
};
