import clsx from "clsx";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.css";

type NavItemProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

export function NavItem({ to, children, className }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(styles.link, isActive && styles.active, className)
      }
    >
      {children}
    </NavLink>
  );
}
