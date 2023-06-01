import clsx from "clsx";
import { Outlet } from "react-router-dom";

import { Department } from "../../api/users";
import { NavItem } from "../../components/NavItem";
import { ReactComponent as IconSort } from "../../icons/24/list-ui-alt.svg";
import { ReactComponent as IconSearch } from "../../icons/24/search.svg";
import styles from "./Layout.module.css";

export const MENU: { title: Department; label: string }[] = [
  // { title: Department.All, label: "Все" },
  { title: Department.Android, label: "Android" },
  { title: Department.Ios, label: "iOS" },
  { title: Department.Design, label: "Дизайн" },
  { title: Department.Management, label: "Менеджмент" },
  { title: Department.Qa, label: "QA" },
  { title: Department.Back_office, label: "Бэк-офис" },
  { title: Department.Frontend, label: "Frontend" },
  { title: Department.Hr, label: "HR" },
  { title: Department.Pr, label: "PR" },
  { title: Department.Backend, label: "Backend" },
  { title: Department.Support, label: "Техподдержка" },
  { title: Department.Analytics, label: "Аналитика" },
];

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
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavItem to="/">Все</NavItem>
            </li>
            {MENU.map((item, i) => (
              <li key={i}>
                <NavItem to={`department/${item.title}`}>{item.label}</NavItem>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
