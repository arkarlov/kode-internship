import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { ErrorScreen } from "../../components/ErrorScreen";
import { User } from "../../components/User";
import { useEmployeesStore } from "../../store";
import { useAppStore } from "../../store/app";
import styles from "./Employees.module.css";

export function Employees() {
  const navigate = useNavigate();

  const loadingError = useAppStore((state) => state.error);
  const loading = useAppStore((state) => state.loading);
  const displayedList = useEmployeesStore((state) => state.displayedEmployees);

  if (loading) return <h1>Loading...</h1>;

  if (loadingError)
    return (
      <div className={styles.error}>
        <ErrorScreen
          errorType="common"
          onAction={() => {
            navigate(window.location.pathname, { replace: true });
          }}
        />
      </div>
    );

  if (displayedList.length === 0)
    return (
      <div className={styles.error}>
        <ErrorScreen errorType="search" />
      </div>
    );

  return (
    <ul className={styles.list}>
      {displayedList.map((user) => (
        <li key={user.id} className={styles.item}>
          <Link to={`/employee/${user.id}`}>
            <User user={user} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
