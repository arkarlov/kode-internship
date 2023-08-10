import clsx from "clsx";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { ErrorScreen } from "../../components/ErrorScreen";
import { Icon } from "../../components/Icon";
import { Modal } from "../../components/Modal";
import { UserSkeleton } from "../../components/UserSkeleton/UserSkeleton";
import { Department, SortOption } from "../../constants";
import { getSortedEmployees, loadEmployees } from "../../handlers";
import { NavigateModule } from "../../modules/NavigateModule";
import { SearchModule } from "../../modules/SearchModule";
import { SortModule } from "../../modules/SortModule";
import { useEmployeesStore } from "../../store";
import { useAppStore } from "../../store/app";
import { filterArrayByObjectKeys } from "../../utils";
import styles from "./Employees.module.css";

export function Employees() {
  const { depId } = useParams();

  const sortBy = useAppStore((s) => s.sortBy);
  const searchString = useAppStore((state) => state.search);
  const loadingError = useAppStore((state) => state.error);
  const loading = useAppStore((state) => state.loading);

  const list = useEmployeesStore((state) => state.employees);
  const setDisplayedList = useEmployeesStore(
    (state) => state.setDisplayedEmployees
  );

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadEmployees(depId as Department);
  }, [depId]);

  useEffect(() => {
    const filteredEmployees = filterArrayByObjectKeys(searchString, list, [
      "firstName",
      "lastName",
      "userTag",
    ]);

    setDisplayedList(getSortedEmployees(filteredEmployees));
  }, [searchString, list]);

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>Поиск</h2>

        <div className={styles.search}>
          <SearchModule />

          <Button
            className={clsx(styles.button)}
            active={sortBy !== SortOption.Alphabet}
            onClick={() => {
              setShowModal(true);
            }}
          >
            <Icon name="list" />
          </Button>
        </div>

        <nav className={styles.nav}>
          <NavigateModule />
        </nav>
      </header>

      <main className={styles.main}>
        {loading ? (
          <ul className={styles.list}>
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <li key={i} className={styles.item}>
                  <UserSkeleton />
                </li>
              ))}
          </ul>
        ) : loadingError ? (
          <div className={styles.error}>
            <ErrorScreen
              errorType="common"
              onAction={() => {
                loadEmployees(depId as Department);
                // navigate(window.location.pathname, { replace: true });
              }}
            />
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Modal
        opened={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className={styles.modal}>
          <h3 className={styles.modal__heading}>Сортировка</h3>
          <SortModule
            onSort={() => {
              setShowModal(false);
            }}
          />
        </div>
      </Modal>
    </>
  );
}
