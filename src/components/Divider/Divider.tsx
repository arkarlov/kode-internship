import React from "react";

import classes from "./Divider.module.css";

type DividerProps = {
  children?: React.ReactNode;
};

export function Divider({ children }: DividerProps) {
  return (
    <div className={classes.divider}>
      {children && <div className={classes.divider__container}>{children}</div>}
    </div>
  );
}
