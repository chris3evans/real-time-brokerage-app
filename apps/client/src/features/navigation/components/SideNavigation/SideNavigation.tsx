import styles from "./SideNavigation.module.scss";
import clsx from "clsx";
import { IconButton } from "@/components/IconButton/IconButton";
import { Menu } from "lucide-react";
import { AppColour } from "@/types/app.enums";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSideNavigationOpen } from "@/store/navigation/sideNavigationSlice";

export const SideNavigation = () => {
  const dispatch = useAppDispatch();
  const sideNavigationOpen = useAppSelector(
    (state) => state.navigation.sideNavigationOpen,
  );

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
        <div
          className={clsx(
            styles["navigation-item"],
            "actionable",
            sideNavigationOpen ? "" : styles["hide"],
          )}
        >
          Dashboard
        </div>
        <div
          className={clsx(
            styles["navigation-item"],
            "actionable",
            sideNavigationOpen ? "" : styles["hide"],
          )}
        >
          Search
        </div>
        <div
          className={clsx(
            styles["navigation-item"],
            "actionable",
            sideNavigationOpen ? "" : styles["hide"],
          )}
        >
          Portfolio
        </div>
        <div
          className={clsx(
            styles["navigation-item"],
            "actionable",
            sideNavigationOpen ? "" : styles["hide"],
          )}
        >
          Settings
        </div>
      </div>
    </div>
  );
};
