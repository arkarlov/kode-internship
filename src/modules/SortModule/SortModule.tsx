import { Radio } from "../../components/Radio";

export enum SortOption {
  Default,
  Birthday,
}

type SortModuleProps = {
  option: SortOption;
  onSort?: (v: SortOption) => void;
};

export function SortModule({ option, onSort }: SortModuleProps) {
  const handleSort = (v: SortOption) => {
    onSort && onSort(v);
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
