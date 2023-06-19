import { useEffect, useState } from "react";

import { useEmployeesStore } from "../../store";
import { useAppStore } from "../../store/app";
import { getDayOfYear } from "../../utils";
import { SortOption } from "./SortModule";

export const useSorting = (): void => {
  const list = useEmployeesStore((state) => state.employees);
  const setDisplayedList = useEmployeesStore(
    (state) => state.setDisplayedEmployees
  );

  const sortBy = useAppStore((state) => state.sortBy);

  useEffect(() => {
    const arr = [...list];
    switch (sortBy) {
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
  }, [sortBy, list]);
};
