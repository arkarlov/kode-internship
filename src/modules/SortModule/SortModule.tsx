import { Radio } from "../../components/Radio";
import { useAppStore } from "../../store/app";

export enum SortOption {
  Default,
  Birthday,
}

type SortModuleProps = {
  onSort?: (v: SortOption) => void;
};

export function SortModule({ onSort }: SortModuleProps) {
  const sortBy = useAppStore((state) => state.sortBy);
  const setSortBy = useAppStore((state) => state.setSortBy);

  const handleSort = (v: SortOption) => {
    setSortBy(v);
    onSort && onSort(v);
  };

  return (
    <Radio
      name="sort"
      options={[
        { value: SortOption.Default, label: "По алфавиту" },
        { value: SortOption.Birthday, label: "По дню рождения" },
      ]}
      value={sortBy}
      onChange={(v) => {
        handleSort(v as SortOption);
      }}
    />
  );
}
