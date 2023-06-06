import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ErrorScreen } from "../../components/ErrorScreen";
import { User } from "../../components/User";
import { useUsersStore } from "../../store";
import styles from "./Employees.module.css";

export function Employees() {
  const displayedList = useUsersStore((state) => state.displayedUsers);

  return (
    <>
      {displayedList.length > 0 ? (
        <ul className={styles.list}>
          {displayedList.map((user) => (
            <li key={user.id} className={styles.item}>
              <Link to={`/employee/${user.id}`}>
                <User user={user} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.error}>
          <ErrorScreen
            errorType="search"
            onAction={() => {
              console.log("handle error");
            }}
          />
        </div>
      )}
    </>
  );
}
