import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Employee } from "../../../api/employees";
import { Divider } from "../../../components/Divider";
import { ErrorScreen } from "../../../components/ErrorScreen";
import { User } from "../../../components/User";
import { SortOption } from "../../../constants";
import { getSortedEmployees } from "../../../handlers";
import { useEmployeesStore } from "../../../store";
import { useAppStore } from "../../../store/app";
import { getDayOfYear } from "../../../utils";
import styles from "./EmployeeList.module.css";

export function EmployeeList() {
  const sortBy = useAppStore((state) => state.sortBy);

  const displayedEmployees = useEmployeesStore(
    (state) => state.displayedEmployees
  );

  const [currentYearList, setCurrentYearList] = useState<Employee[]>([]);
  const [nextYearList, setNextYearList] = useState<Employee[]>([]);

  useEffect(() => {
    const sortedEmployees = getSortedEmployees(displayedEmployees);

    if (sortBy === SortOption.Birthday) {
      const currentDay = getDayOfYear(new Date());
      const currentYear: Employee[] = [];
      const nextYear: Employee[] = [];

      sortedEmployees.forEach((employee) => {
        if (getDayOfYear(new Date(employee.birthday)) < currentDay) {
          nextYear.push(employee);
        } else {
          currentYear.push(employee);
        }
      });

      setCurrentYearList(currentYear);
      setNextYearList(nextYear);
    } else {
      setCurrentYearList(sortedEmployees);
      setNextYearList([]);
    }
  }, [displayedEmployees, sortBy]);

  if (displayedEmployees.length === 0)
    return (
      <div className={styles.error}>
        <ErrorScreen errorType="search" />
      </div>
    );

  return (
    <ul className={styles.list}>
      {currentYearList.map((employee) => (
        <li key={employee.id} className={styles.item}>
          <Link to={`/employee/${employee.id}`}>
            <User user={employee} />
          </Link>
        </li>
      ))}
      {nextYearList.length > 0 && (
        <>
          <li>
            <Divider>
              <p className={styles.divider}>{new Date().getFullYear() + 1}</p>
            </Divider>
          </li>
          {nextYearList.map((employee) => (
            <li key={employee.id} className={styles.item}>
              <Link to={`/employee/${employee.id}`}>
                <User user={employee} />
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
