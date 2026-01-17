import type { ListSortersComponentProps } from "../types/components.interfaces";
import styles from "./ListSorters.module.scss";

export const ListSorters = ({ sorters }: ListSortersComponentProps) => {
  return (
    <div className={styles["sorters"]}>
      {sorters.map((sorter, i) => (
        <div className={styles["sorter"]} key={i}>
          {sorter.name}
        </div>
      ))}
    </div>
  );
};
