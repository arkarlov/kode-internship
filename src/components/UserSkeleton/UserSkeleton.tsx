import { Skeleton } from "../Skeleton";
import classes from "./UserSkeleton.module.css";

export function UserSkeleton() {
  return (
    <div className={classes.skeleton}>
      <Skeleton className={classes.skeleton_circle} />
      <div className={classes.skeleton__container}>
        <Skeleton className={classes.skeleton_string_large} />
        <Skeleton className={classes.skeleton_string_small} />
      </div>
    </div>
  );
}
