import { useEffect, useState } from "react";

import { useUsersStore } from "../store";
import { getDayOfYear } from "../utils";

export enum SortOption {
  Default,
  Birthday,
}

export const useSorting = (): [
  SortOption,
  React.Dispatch<React.SetStateAction<SortOption>>
] => {
  const list = useUsersStore((state) => state.users);
  const setDisplayedList = useUsersStore((state) => state.setdisplayedUsers);

  const [option, setOption] = useState<SortOption>(SortOption.Default);

  useEffect(() => {
    const arr = [...list];
    switch (option) {
      case SortOption.Birthday:
        arr.sort((a, b) => {
          return (
            getDayOfYear(new Date(a.birthday)) -
            getDayOfYear(new Date(b.birthday))
          );
        });

        break;
      case SortOption.Default:
      default:
        arr.sort(
          (a, b) => a.firstName.charCodeAt(0) - b.firstName.charCodeAt(0)
        );
        break;
    }

    setDisplayedList(arr);
  }, [option, list, setDisplayedList]);

  return [option, setOption];
};
