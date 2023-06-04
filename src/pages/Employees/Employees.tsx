import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Department, getUsersList, IUser } from "../../api/users";
import { ErrorMsg } from "../../components/ErrorMsg";
import { User } from "../../components/User";
import { useUsersStore } from "../../store";
import styles from "./Employees.module.css";

export function Employees() {
  const { depId } = useParams();

  const setEmployees = useUsersStore((state) => state.setUsers);
  const displayedList = useUsersStore((state) => state.displayedUsers);

  useEffect(() => {
    (async function () {
      const data = await getUsersList(depId as Department);
      // setEmployees(data);
      useUsersStore.setState({ users: data, displayedUsers: data });
    })();
  }, [depId, setEmployees]);

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
          <ErrorMsg
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
