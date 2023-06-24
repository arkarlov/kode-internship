import { Icon } from "../../components/Icon";
import { useEmployeesStore } from "../../store";
import { useAppStore } from "../../store/app";
import { searchInArrayByKeys } from "../../utils";
import classes from "./SearchModule.module.css";

export function SearchModule() {
  const employees = useEmployeesStore((state) => state.employees);
  const setDisplayedList = useEmployeesStore(
    (state) => state.setDisplayedEmployees
  );
  const search = useAppStore((state) => state.search);
  const setSearch = useAppStore((state) => state.setSearch);

  const handleInput = (v: string) => {
    setSearch(v);
    const newArray = searchInArrayByKeys(v, employees, [
      "firstName",
      "lastName",
      "userTag",
    ]);

    setDisplayedList(newArray);
  };

  return (
    <div className={classes.search}>
      <Icon name="search" />
      <input
        className={classes.search__input}
        type="text"
        placeholder="Введи имя, тег, почту..."
        onChange={(e) => handleInput(e.target.value)}
        value={search}
      />
    </div>
  );
}
