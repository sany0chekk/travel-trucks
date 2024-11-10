import { FC } from "react";
import FiltersListItem from "./FiltersListItem";

interface FilterItem {
  key: string;
  value: string;
  icon: string;
  label: string;
}

interface Props {
  items: FilterItem[];
  onFilterChange: (filterKey: string, filterValue: string | boolean) => void;
}

const FiltersList: FC<Props> = ({ items, onFilterChange }) => {
  return (
    <>
      {items.length > 0 && (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-3">
          {items.map((item, index) => (
            <FiltersListItem
              key={index}
              item={item}
              onFilterChange={onFilterChange}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default FiltersList;
