import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import styles from "./AssetProfileActions.module.scss";
import { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";

export const AssetProfileActions = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    console.log(modalOpen);
  }, [modalOpen]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className={styles["asset-actions"]}>
      <ButtonSet
        className={styles["buttons-vertical"]}
        buttons={[
          { label: "Buy" },
          { label: "Sell", style: "outline" },
          { label: "Add to Watchlist", style: "outline" },
        ]}
      />
      <div onClick={openModal}>TEST ME!</div>
      <Modal open={modalOpen} onClose={closeModal}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
