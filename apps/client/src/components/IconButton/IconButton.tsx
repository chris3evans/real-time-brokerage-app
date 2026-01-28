import { IconButtonComponentProps } from "@components-types/components.interfaces";
import styles from "./IconButton.module.scss";
import clsx from "clsx";

export const IconButton = ({
  onClick,
  children,
  className,
}: IconButtonComponentProps) => {
  return (
    <div onClick={onClick} className={clsx(className, styles["icon-button"])}>
      {children}
    </div>
  );
};
