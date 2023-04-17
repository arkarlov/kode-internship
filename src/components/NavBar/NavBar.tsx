import { MENU } from "../../config";
import { NavItem } from "../NavItem";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavItem to="/">Все</NavItem>
        </li>
        {MENU.map((item, i) => (
          <li key={i} className={styles.item}>
            <NavItem to={`department/${item.title}`}>{item.label}</NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
}
