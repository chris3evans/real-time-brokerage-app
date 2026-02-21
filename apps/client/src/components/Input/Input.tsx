import React, { useId } from "react";
import { InputComponentProps } from "../types/components.interfaces";
import styles from "./Input.module.scss";
import clsx from "clsx";

export const Input = React.forwardRef<HTMLInputElement, InputComponentProps>(
  (
    {
      label,
      error,
      helperText,
      className,
      elementOrientation = "vertical",
      ...props
    },
    ref,
  ) => {
    const inputId = useId();

    return (
      <div
        className={clsx(
          styles["field"],
          styles[`${elementOrientation}-orientation`],
        )}
      >
        {label && <label htmlFor={inputId}>{label}</label>}

        <input
          {...props}
          ref={ref}
          id={inputId}
          className={className}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />

        {helperText && <p>{helperText}</p>}

        {error && <p id={`${inputId}-error`}>{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
