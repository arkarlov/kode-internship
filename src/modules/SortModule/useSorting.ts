import { useEffect, useState } from "react";

import { useEmployeesStore } from "../../store";
import { getDayOfYear } from "../../utils";
import { SortOption } from "./SortModule";

export const useSorting = (): [
  SortOption,
  React.Dispatch<React.SetStateAction<SortOption>>
] => {
  const list = useEmployeesStore((state) => state.employees);
  const setDisplayedList = useEmployeesStore(
    (state) => state.setDisplayedEmployees
  );

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
