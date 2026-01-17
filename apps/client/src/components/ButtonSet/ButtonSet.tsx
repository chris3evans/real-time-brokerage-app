import { Button } from "../Button/Button";
import type { ButtonSetComponentProps } from "../types/components.interfaces";
import styles from "./ButtonSet.module.scss";
import clsx from "clsx";

export const ButtonSet = ({ buttons, className }: ButtonSetComponentProps) => {
  return (
    <div className={clsx(styles["button-container"], className)}>
      {buttons.map((button, i) => (
        <Button key={i} label={button.label} style={button.style} />
      ))}
    </div>
  );
};
