import clsx from "clsx";

import classes from "./Icon.module.css";
import { ReactComponent as IconCross16 } from "./icons/16/cancel_16.svg";
import { ReactComponent as IconStar } from "./icons/24/favorite.svg";
import { ReactComponent as IconList } from "./icons/24/list-ui-alt.svg";
import { ReactComponent as IconPhone } from "./icons/24/phone-alt.svg";
import { ReactComponent as IconShevronLeft } from "./icons/24/Right.svg";
import { ReactComponent as IconSearch } from "./icons/24/search.svg";

export type IconProps = {
  name: "star" | "list" | "phone" | "shevron-left" | "search" | "cross";
  size?: "sm" | "md";
};

export function Icon({ name, size = "md" }: IconProps) {
  switch (name) {
    case "star":
      return <IconStar className={clsx(classes.icon, classes.icon_size_md)} />;
    case "list":
      return <IconList className={clsx(classes.icon, classes.icon_size_md)} />;
    case "phone":
      return <IconPhone className={clsx(classes.icon, classes.icon_size_md)} />;
    case "shevron-left":
      return (
        <IconShevronLeft className={clsx(classes.icon, classes.icon_size_md)} />
      );
    case "search":
      return (
        <IconSearch className={clsx(classes.icon, classes.icon_size_md)} />
      );
    case "cross":
      return (
        <IconCross16 className={clsx(classes.icon, classes.icon_size_sm)} />
      );

    default:
      return null;
  }
}
