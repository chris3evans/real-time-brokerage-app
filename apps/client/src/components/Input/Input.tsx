import React, { useId } from "react";
import { InputComponentProps } from "../types/components.interfaces";

export const Input = React.forwardRef<HTMLInputElement, InputComponentProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    const inputId = useId();

    return (
      <div>
        {label && <label htmlFor={inputId}>{label}</label>}

        <input
          {...props}
          ref={ref}
          id={inputId}
          className={className}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />

        {error ? <p id={`${inputId}-error`}>{error}</p> : <p>{helperText}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
