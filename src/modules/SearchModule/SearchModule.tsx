import { ReactComponent as IconSearch } from "../../icons/24/search.svg";
import { useUsersStore } from "../../store";
import { searchInArray } from "../../utils";
import classes from "./SearchModule.module.css";

export function SearchModule() {
  const employees = useUsersStore((state) => state.users);
  const setDisplayedList = useUsersStore((state) => state.setdisplayedUsers);

  const handleInput = (v: string) => {
    const newArray = searchInArray(v, employees, [
      "firstName",
      "lastName",
      "userTag",
    ]);

    setDisplayedList(newArray);
  };

  return (
    <div className={classes.search}>
      <IconSearch className={classes.search__icon} />
      <input
        className={classes.search__input}
        type="text"
        placeholder="Введи имя, тег, почту..."
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
}
