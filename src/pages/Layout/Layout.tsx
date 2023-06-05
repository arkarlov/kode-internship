import clsx from "clsx";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Radio } from "../../components/Radio";
import { useSorting } from "../../hooks/useSorting";
import { ReactComponent as IconSort } from "../../icons/24/list-ui-alt.svg";
import { NavigateModule } from "../../modules/NavigateModule";
import { SearchModule } from "../../modules/SearchModule";
import { SortModule, SortOption } from "../../modules/SortModule";
import styles from "./Layout.module.css";

export function Layout() {
  const [sorted, setSorted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [sortValue, setSortValue] = useSorting();

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

          <Button
            className={clsx(styles.button)}
            active={sortValue !== SortOption.Default}
            onClick={() => {
              setShowModal(true);
            }}
          >
            <IconSort className={styles.icon} />
          </Button>
          <button
            onClick={() => {
              setShowModal(true);
            }}
          ></button>
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
          {/* <SortModule option={sortValue} onSort={onSort} /> */}
          <Radio
            name="sort"
            options={[
              { value: SortOption.Default, label: "По алфавиту" },
              { value: SortOption.Birthday, label: "По дню рождения" },
            ]}
            value={sortValue}
            onChange={(v) => {
              onSort(v as SortOption);
            }}
          />
        </div>
      </Modal>
    </>
  );
}
