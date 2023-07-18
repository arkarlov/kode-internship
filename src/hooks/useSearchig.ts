import { useEffect } from "react";

import { useEmployeesStore } from "../store";
import { useAppStore } from "../store/app";
import { searchInArrayByKeys } from "../utils";

export const useSearching = () => {
  const searchString = useAppStore((state) => state.search);

  const list = useEmployeesStore((state) => state.employees);
  const setDisplayedList = useEmployeesStore(
    (state) => state.setDisplayedEmployees
  );

  useEffect(() => {
    const newArray = searchInArrayByKeys(searchString, list, [
      "firstName",
      "lastName",
      "userTag",
    ]);

    setDisplayedList(newArray);
  }, [searchString, list]);
};
