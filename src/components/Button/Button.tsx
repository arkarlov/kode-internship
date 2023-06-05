import clsx from "clsx";
import { MouseEventHandler, ReactNode } from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  className?: string;
  onClick: MouseEventHandler;
  active?: boolean;
  rounded?: boolean;
  children: ReactNode;
};

export function Button({
  className,
  active = false,
  rounded = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        classes.button,
        active && classes.button_sorted,
        rounded && classes.button_rounded
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
