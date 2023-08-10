import { NavItem } from "../../components/NavItem";
import { MENU } from "../../constants";
import classes from "./NavigateModule.module.css";

export function NavigateModule() {
  return (
    <ul className={classes.navigation}>
      <li>
        <NavItem to="/">Все</NavItem>
      </li>
      {MENU.map((item, i) => (
        <li key={i}>
          <NavItem to={`department/${item.name}`}>{item.label}</NavItem>
        </li>
      ))}
    </ul>
  );
}
