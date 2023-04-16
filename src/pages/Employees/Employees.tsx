import { useEffect, useState } from "react";

import { getUsersList, IUser } from "../../api/users";
import { User } from "../../components/User";
import styles from "./Employees.module.css";

export function Employees() {
  const [employees, setEmployees] = useState<IUser[]>([]);

  useEffect(() => {
    async function getEmployees() {
      const data = await getUsersList();
      setEmployees(data.items);
    }

    getEmployees();
  }, []);

  return (
    <>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              <User user={employee} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
