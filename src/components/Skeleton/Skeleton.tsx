import clsx from "clsx";

import classes from "./Skeleton.module.css";

export function Skeleton({ className }: { className?: string }) {
  return <div className={clsx(classes.skeleton, className)} />;
}
