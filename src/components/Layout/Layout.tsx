import clsx from "clsx";
import { Outlet } from "react-router-dom";

import { ReactComponent as IconSort } from "../../icons/24/list-ui-alt.svg";
import { ReactComponent as IconSearch } from "../../icons/24/search.svg";
import { NavBar } from "../NavBar";
import styles from "./Layout.module.css";

export function Layout() {
  const sorted = false;

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>Поиск</h2>
        <div className={styles.search}>
          <IconSearch className={styles.icon} />
          <input
            className={styles.search__input}
            type="text"
            placeholder="Введи имя, тег, почту..."
          />
          <button
            className={clsx(styles.button, sorted && styles.button_sorted)}
            onClick={() => {
              console.log("sort");
            }}
          >
            <IconSort className={styles.icon} />
          </button>
        </div>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
