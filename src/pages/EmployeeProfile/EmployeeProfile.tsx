import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { IUser } from "../../api/users";
import { Avatar } from "../../components/Avatar";
import { ReactComponent as IconStar } from "../../icons/24/favorite.svg";
import { ReactComponent as IconPhone } from "../../icons/24/phone-alt.svg";
import { ReactComponent as IconShevronLeft } from "../../icons/24/Right.svg";
import { testUser } from "../../mock/user";
import { getFormatDate } from "../../utils";
import { getNoun } from "../../utils";
import styles from "./EmployeeProfile.module.css";

export function EmployeeProfile() {
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState<IUser | null>(null);

  useEffect(() => {
    setEmployee(testUser);
  }, [employeeId]);

  const getAge = () => {
    const currentYear = new Date().getFullYear();
    const dateString = employee?.birthday;
    if (dateString) {
      const bithYear = new Date(dateString).getFullYear();
      const age = currentYear - bithYear;
      return `${age} ${getNoun(age, ["год", "года", "лет"])}`;
    }
  };

  if (!employee) return null;

  return (
    <div className={styles.employee}>
      <header className={styles.header}>
        <button
          className={styles.back}
          onClick={() => {
            navigate(-1);
          }}
        >
          <IconShevronLeft />
        </button>
      </header>
      <div className={styles.wrapper}>
        <Avatar
          className={styles.avatar}
          url={employee.avatarUrl}
          title={`${employee.firstName} ${employee.lastName}`}
        />
        <div className={styles.title}>
          <h1
            className={styles.name}
          >{`${employee.firstName} ${employee.lastName}`}</h1>
          <p className={styles.tag}>{employee.userTag}</p>
        </div>
        <p className={styles.position}>{employee.position}</p>
      </div>
      <main className={styles.main}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.value}>
              <IconStar />
              <p>
                {getFormatDate(employee.birthday, {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </p>
            </div>
            <div className={styles.aside}>{getAge()}</div>
          </li>
          <li className={styles.item}>
            <div className={styles.value}>
              <IconPhone />
              <p>{employee.phone}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}
