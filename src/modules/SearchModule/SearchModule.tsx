import { Icon } from "../../components/Icon";
import { useAppStore } from "../../store/app";
import classes from "./SearchModule.module.css";

export function SearchModule() {
  const search = useAppStore((state) => state.search);
  const setSearch = useAppStore((state) => state.setSearch);

  return (
    <div className={classes.search}>
      <Icon name="search" />
      <input
        className={classes.search__input}
        type="text"
        placeholder="Введи имя, тег, почту..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
}
