import { ButtonSet } from "@components/ButtonSet/ButtonSet";
import type { HeadingWithButtonsProps } from "../types/components.interfaces";
import styles from "./HeadingWithButtons.module.scss";

export const HeadingWithButtons = ({
  heading,
  buttons,
}: HeadingWithButtonsProps) => {
  return (
    <div className={styles["heading-with-buttons"]}>
      <h4>{heading}</h4>
      <ButtonSet buttons={buttons} />
    </div>
  );
};
