import { Link } from "react-router-dom";

import { IUser } from "../../api/users";
import { User } from "../User";
import styles from "./UsersList.module.css";

interface IUsersListProps {
  users: IUser[];
}

export function UsersList({ users }: IUsersListProps) {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <li key={user.id} className={styles.item}>
          <Link to={`/employee/${user.id}`}>
            <User user={user} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
