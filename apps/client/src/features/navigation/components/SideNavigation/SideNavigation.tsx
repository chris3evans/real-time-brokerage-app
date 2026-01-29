import styles from "./SideNavigation.module.scss";
import { IconButton } from "@/components/IconButton/IconButton";
import { Menu, X } from "lucide-react";
import { AppColour } from "@/types/app.enums";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSideNavigationOpen } from "@/store/navigation/sideNavigationSlice";
import { NavigationLink } from "@navigation-types/navigation.interfaces";
import { NavigationItem } from "@navigation-components/NavigationItem/NavigationItem";

export const SideNavigation = () => {
  const dispatch = useAppDispatch();
  const sideNavigationOpen = useAppSelector(
    (state) => state.navigation.sideNavigationOpen,
  );

  const [showNavigation, setShowNavigation] = useState<boolean>(true);

  const toggleNavigation = (): void => {
    setShowNavigation(!showNavigation);
    dispatch(setSideNavigationOpen(!showNavigation));
  };

  const sideNavigationItems: NavigationLink[] = [
    { destination: "/dashboard", label: "Dashboard" },
    { destination: "/search", label: "Search" },
    { destination: "/portfolio", label: "Portfolio" },
    { destination: "/settings", label: "Settings" },
  ];

  return (
    <div className={styles["side-navigation"]}>
      <IconButton
        className={styles["navigation-button"]}
        onClick={() => toggleNavigation()}
      >
        {!sideNavigationOpen ? (
          <X color={AppColour.WHITE} />
        ) : (
          <Menu color={AppColour.WHITE} />
        )}
      </IconButton>
      <div className={styles["navigation-items"]}>
        {sideNavigationItems.map((ni) => (
          <NavigationItem
            destination={ni.destination}
            open={sideNavigationOpen}
            label={ni.label}
          />
        ))}
      </div>
    </div>
  );
};
