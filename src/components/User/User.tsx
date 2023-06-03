import { IUser } from "../../api/users";
import { capitalize, getFormatDate } from "../../utils";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

type UserProps = {
  user: IUser;
  displayBirthday?: boolean;
};

export function User({ user, displayBirthday = false }: UserProps) {
  return (
    <article className={styles.user}>
      <div className={styles.profile}>
        <Avatar
          className={styles.avatar}
          url={user.avatarUrl}
          title={`${user.firstName} ${user.lastName}`}
        />
        <div>
          <header className={styles.personality}>
            <h4 className={styles.name}>
              {`${user.firstName} ${user.lastName}`}
            </h4>
            {user.userTag && <p className={styles.tag}>{user.userTag}</p>}
          </header>
          <p className={styles.position}>{capitalize(user.position)}</p>
        </div>
      </div>
      {displayBirthday && (
        <aside className={styles.birthday}>
          {getFormatDate(user.birthday)}
        </aside>
      )}
    </article>
  );
}
