import styles from "./SideNavigation.module.scss";
import clsx from "clsx";
import { IconButton } from "@/components/IconButton/IconButton";
import { Menu } from "lucide-react";
import { AppColour } from "@/types/app.enums";

export const SideNavigation = () => {
  return (
    <div className={styles["side-navigation"]}>
      <IconButton>
        <Menu color={AppColour.WHITE} />
      </IconButton>
      <div className={styles["navigation-items"]}>
        <div className={clsx(styles["navigation-item"], "actionable")}>
          Dashboard
        </div>
        <div className={clsx(styles["navigation-item"], "actionable")}>
          Search
        </div>
        <div className={clsx(styles["navigation-item"], "actionable")}>
          Portfolio
        </div>
        <div className={clsx(styles["navigation-item"], "actionable")}>
          Settings
        </div>
      </div>
    </div>
  );
};
