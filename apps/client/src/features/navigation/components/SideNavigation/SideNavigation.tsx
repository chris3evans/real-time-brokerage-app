import styles from "./SideNavigation.module.scss";
import clsx from "clsx";
import { IconButton } from "@/components/IconButton/IconButton";
import { Menu } from "lucide-react";
import { AppColour } from "@/types/app.enums";
import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setSideNavigationOpen } from "@/store/navigation/sideNavigationSlice";

export const SideNavigation = () => {
  const dispatch = useAppDispatch();

  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  const toggleNavigation = (): void => {
    setShowNavigation(!showNavigation);
    dispatch(setSideNavigationOpen(showNavigation));
  };

  return (
    <div className={styles["side-navigation"]}>
      <IconButton onClick={() => toggleNavigation()}>
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
