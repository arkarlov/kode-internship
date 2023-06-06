import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Department } from "../../api/employees";
import { NavItem } from "../../components/NavItem";
import { loadEmployees } from "../LoadModule";
import classes from "./NavigateModule.module.css";

export const MENU: { name: Department; label: string }[] = [
  // { name: Department.All, label: "Все" },
  { name: Department.Android, label: "Android" },
  { name: Department.Ios, label: "iOS" },
  { name: Department.Design, label: "Дизайн" },
  { name: Department.Management, label: "Менеджмент" },
  { name: Department.Qa, label: "QA" },
  { name: Department.Back_office, label: "Бэк-офис" },
  { name: Department.Frontend, label: "Frontend" },
  { name: Department.Hr, label: "HR" },
  { name: Department.Pr, label: "PR" },
  { name: Department.Backend, label: "Backend" },
  { name: Department.Support, label: "Техподдержка" },
  { name: Department.Analytics, label: "Аналитика" },
];

export function NavigateModule() {
  const { depId } = useParams();

  useEffect(() => {
    loadEmployees(depId as Department);
  }, [depId]);

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
