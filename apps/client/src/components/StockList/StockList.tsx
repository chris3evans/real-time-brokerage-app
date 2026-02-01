import { StockListComponentProps } from "@components-types/components.interfaces";
import clsx from "clsx";
import styles from "./StockLists.module.scss";

export const StockList = ({
  children,
  className,
  autoHeight = false,
}: StockListComponentProps) => {
  return (
    <div
      className={clsx(
        className,
        styles["stock-list"],
        autoHeight ? styles["auto-height"] : styles["fixed-height"],
      )}
    >
      {children}
    </div>
  );
};
