import { ViewComponentProps } from "@components-types/components.interfaces";
import styles from "./View.module.scss";
import clsx from "clsx";

export const View = ({ children, className }: ViewComponentProps) => {
  return <div className={clsx(styles["view"], className)}>{children}</div>;
};
