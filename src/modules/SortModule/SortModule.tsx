import clsx from "clsx";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

import { Modal } from "../../components/Modal";
import { Radio } from "../../components/Radio";
import { ReactComponent as IconSort } from "../../icons/24/list-ui-alt.svg";
import { useUsersStore } from "../../store";
import { getDayOfYear } from "../../utils";
import classes from "./SortModule.module.css";

export enum SortOption {
  Default,
  Birthday,
}

type SortModuleProps = {
  option: SortOption;
  onSort?: (v: SortOption) => void;
};

export function SortModule() {
  const list = useUsersStore((state) => state.users);
  const setDisplayedList = useUsersStore((state) => state.setdisplayedUsers);

  const [option, setOption] = useState<SortOption>(SortOption.Default);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const arr = [...list];
    switch (option) {
      case SortOption.Birthday:
        arr.sort((a, b) => {
          return (
            getDayOfYear(new Date(a.birthday)) -
            getDayOfYear(new Date(b.birthday))
          );
        });

        break;
      case SortOption.Default:
      default:
        arr.sort(
          (a, b) => a.firstName.charCodeAt(0) - b.firstName.charCodeAt(0)
        );
        break;
    }

    setDisplayedList(arr);
  }, [option, list, setDisplayedList]);

  const handleSort = (v: SortOption) => {
    setOption(v);
  };

  return (
    <Modal
      opened={showModal}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <div className={classes.modal}>
        <h3 className={classes.modal__heading}>Сортировка</h3>
        <Radio
          name="sort"
          options={[
            { value: SortOption.Default, label: "По алфавиту" },
            { value: SortOption.Birthday, label: "По дню рождения" },
          ]}
          value={option}
          onChange={(v) => {
            handleSort(v as SortOption);
          }}
        />
      </div>
    </Modal>
    // <Radio
    //   name="sort"
    //   options={[
    //     { value: SortOption.Default, label: "По алфавиту" },
    //     { value: SortOption.Birthday, label: "По дню рождения" },
    //   ]}
    //   value={option}
    //   onChange={(v) => {
    //     handleSort(v as SortOption);
    //   }}
    // />
  );
}
