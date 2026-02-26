import { GeneralModalComponentProps } from "@/components/types/components.interfaces";
import { Modal, Box } from "@mui/material";
import styles from "./GeneralModal.module.scss";

export const GeneralModal = ({
  children,
  modalOpen,
  closeModal,
  title,
}: GeneralModalComponentProps) => {
  return (
    <Modal open={modalOpen} onClose={closeModal}>
      <Box className={styles["modal-container"]}>
        {title && <h3>{title}</h3>}
        <div>{children}</div>
      </Box>
    </Modal>
  );
};
