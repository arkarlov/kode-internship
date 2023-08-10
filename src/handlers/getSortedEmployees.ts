import { Employee } from "../api/employees";
import { SortOption } from "../constants";
import { useAppStore } from "../store/app";
import { getDayOfYear } from "../utils";

export const getSortedEmployees = (employees: Employee[]) => {
  const { sortBy } = useAppStore.getState();

  const newArray = [...employees];

  switch (sortBy) {
    case SortOption.Birthday:
      newArray.sort((a, b) => {
        return (
          getDayOfYear(new Date(a.birthday)) -
          getDayOfYear(new Date(b.birthday))
        );
      });

      break;
    case SortOption.Alphabet:
    default:
      newArray.sort(
        (a, b) => a.firstName.charCodeAt(0) - b.firstName.charCodeAt(0)
      );
      break;
  }

  return newArray;
};
