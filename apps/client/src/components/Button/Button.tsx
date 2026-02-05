import type { ButtonComponentProps } from "@components-types/components.interfaces";
import styles from "./Button.module.scss";

export const Button = ({
  label,
  style = "filled",
  onClick,
}: ButtonComponentProps) => {
  const buttonClass: string = `${styles["button"]} ${styles[style]}`;

  return (
    <button onClick={onClick} className={buttonClass}>
      {label}
    </button>
  );
};
