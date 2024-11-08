import { FC } from "react";
import FiltersListItem from "./FiltersListItem";

interface Props {
  items: {
    icon: string;
    label: string;
  }[];
}

const FiltersList: FC<Props> = ({ items }) => {
  return (
    <>
      {items.length > 0 && (
        <ul className="grid grid-cols-3 gap-y-2 gap-x-3">
          {items.map((item, index) => (
            <FiltersListItem key={index} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default FiltersList;
