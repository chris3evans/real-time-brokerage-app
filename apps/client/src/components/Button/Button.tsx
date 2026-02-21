import type { ButtonComponentProps } from "@components-types/components.interfaces";
import styles from "./Button.module.scss";
import React from "react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonComponentProps>(
  ({ label, style = "filled", onClick, ...props }, ref) => {
    const buttonClass: string = `${styles["button"]} ${styles[style]}`;

    return (
      <button {...props} ref={ref} onClick={onClick} className={buttonClass}>
        {label}
      </button>
    );
  },
);

Button.displayName = "Button";
