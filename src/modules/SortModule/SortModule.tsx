import { Radio } from "../../components/Radio";
import { SortOption } from "../../constants";
import { useAppStore } from "../../store/app";

type SortModuleProps = {
  onSort?: (v: SortOption) => void;
};

export function SortModule({ onSort }: SortModuleProps) {
  const sortBy = useAppStore((state) => state.sortBy);
  const setSortBy = useAppStore((state) => state.setSortBy);

  return (
    <Radio
      name="sort"
      options={[
        { value: SortOption.Alphabet, label: "По алфавиту" },
        { value: SortOption.Birthday, label: "По дню рождения" },
      ]}
      value={sortBy}
      onChange={(v) => {
        setSortBy(v as SortOption);
        onSort && onSort(v as SortOption);
      }}
    />
  );
}
