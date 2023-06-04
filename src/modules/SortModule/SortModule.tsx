import { shallow } from "zustand/shallow";

import { Radio } from "../../components/Radio";
import { useUsersStore } from "../../store";
import { getDayOfYear } from "../../utils/getDayOfYear";

export enum SortOption {
  Default,
  Birthday,
}

type SortModuleProps = {
  option: SortOption;
  onSort?: (v: SortOption) => void;
};

export function SortModule({ option, onSort }: SortModuleProps) {
  const [employees, setEmployees] = useUsersStore(
    (state) => [state.users, state.setUsers],
    shallow
  );

  const handleSort = (v: SortOption) => {
    const arr = [...employees];
    switch (v) {
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

    setEmployees(arr);

    onSort && onSort(v as SortOption);
  };

  return (
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
  );
}
