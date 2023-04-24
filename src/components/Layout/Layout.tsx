import { Outlet } from "react-router-dom";

import { NavBar } from "../NavBar";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>Поиск</h2>
        <div className={styles.search}>
          <input type="search" />
        </div>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
