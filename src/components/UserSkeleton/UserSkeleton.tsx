import clsx from "clsx";

import classes from "./UserSkeleton.module.css";

export function UserSkeleton() {
  return (
    <div className={classes.skeleton}>
      <div
        className={clsx(
          classes.skeleton__block,
          classes.skeleton__block_circle
        )}
      />
      <div className={classes.skeleton__container}>
        <div
          className={clsx(
            classes.skeleton__block,
            classes.skeleton__block_string_large
          )}
        />
        <div
          className={clsx(
            classes.skeleton__block,
            classes.skeleton__block_string_small
          )}
        />
      </div>
    </div>
  );
}
