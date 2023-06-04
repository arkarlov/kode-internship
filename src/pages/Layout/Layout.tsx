import clsx from "clsx";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Modal } from "../../components/Modal";
import { ReactComponent as IconSort } from "../../icons/24/list-ui-alt.svg";
import { NavigateModule } from "../../modules/NavigateModule";
import { SearchModule } from "../../modules/SearchModule";
import { SortModule, SortOption } from "../../modules/SortModule";
import styles from "./Layout.module.css";

export function Layout() {
  const [sorted, setSorted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [sortValue, setSortValue] = useState<SortOption>(SortOption.Default);

  const onSort = (v: SortOption) => {
    setSortValue(v);
    setShowModal(false);

    if (v === SortOption.Default) {
      setSorted(false);
    } else {
      setSorted(true);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>Поиск</h2>

        <div className={styles.search}>
          <SearchModule />
          <button
            className={clsx(styles.button, sorted && styles.button_sorted)}
            onClick={() => {
              setShowModal(true);
            }}
          >
            <IconSort className={styles.icon} />
          </button>
        </div>

        <nav className={styles.nav}>
          <NavigateModule />
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>

      <Modal
        opened={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className={styles.modal}>
          <h3 className={styles.modal__heading}>Сортировка</h3>
          <SortModule option={sortValue} onSort={onSort} />
        </div>
      </Modal>
    </>
  );
}
