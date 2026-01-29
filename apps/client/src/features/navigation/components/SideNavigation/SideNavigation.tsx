import styles from "./SideNavigation.module.scss";
import clsx from "clsx";
import { IconButton } from "@/components/IconButton/IconButton";
import { Menu, X } from "lucide-react";
import { AppColour } from "@/types/app.enums";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSideNavigationOpen } from "@/store/navigation/sideNavigationSlice";
import { NavLink } from "react-router-dom";

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
      <IconButton
        className={styles["navigation-button"]}
        onClick={() => toggleNavigation()}
      >
        {sideNavigationOpen ? (
          <X color={AppColour.WHITE} />
        ) : (
          <Menu color={AppColour.WHITE} />
        )}
      </IconButton>
      <div className={styles["navigation-items"]}>
        <NavLink
          to="/dashboard"
          className={clsx(
            styles["navigation-item"],
            "actionable",
            sideNavigationOpen ? "" : styles["hide"],
          )}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/search"
          className={clsx(
            styles["navigation-item"],
            "actionable",
            sideNavigationOpen ? "" : styles["hide"],
          )}
        >
          Search
        </NavLink>
        <NavLink
          to="/portfolio"
          className={clsx(
            styles["navigation-item"],
            "actionable",
            sideNavigationOpen ? "" : styles["hide"],
          )}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/settings"
          className={clsx(
            styles["navigation-item"],
            "actionable",
            sideNavigationOpen ? "" : styles["hide"],
          )}
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};
