import { IconButtonComponentProps } from "@components-types/components.interfaces";
import styles from "./IconButton.module.scss";
import clsx from "clsx";

export const IconButton = ({
  children,
  className,
}: IconButtonComponentProps) => {
  return (
    <div className={clsx(className, styles["icon-button"])}>{children}</div>
  );
};
