import { NavigationItemComponentProps } from "@navigation-types/navigation.interfaces";
import clsx from "clsx";
import styles from "./NavigationItem.module.scss";
import { NavLink } from "react-router-dom";

export const NavigationItem = ({
  destination,
  className,
  open,
  label,
}: NavigationItemComponentProps) => {
  return (
    <NavLink
      to={destination}
      className={({ isActive }) =>
        clsx(
          styles["navigation-item"],
          className,
          isActive && styles["active"],
          open && styles["hide"],
        )
      }
    >
      {label}
    </NavLink>
  );
};
