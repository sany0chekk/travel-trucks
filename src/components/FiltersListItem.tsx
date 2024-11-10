import React from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectFilters } from "../redux/filters/selectors";

interface Props {
  item: {
    key: string;
    value: string;
    icon: string;
    label: string;
  };
  type?: "checkbox" | "radio";
  onFilterChange: (filterKey: string, filterValue: string | boolean) => void;
}

const FiltersListItem: FC<Props> = ({
  item,
  type = "checkbox",
  onFilterChange,
}) => {
  const filters = useSelector(selectFilters);
  const isChecked = filters[item.key] === item.value;

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    onFilterChange(item.key, newCheckedState ? item.value : "");
  };

  return (
    <li>
      <label
        className={`h-[96px] px-10 border rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors 
        ${isChecked ? "border-button" : "border-grayLight"}`}
      >
        <input
          type={type}
          name={item.key}
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="hidden"
        />
        <svg className="w-8 h-8 mb-2">
          <use href={`./icons.svg#${item.icon}`}></use>
        </svg>
        <p className="text-center">{item.label}</p>
      </label>
    </li>
  );
};

export default FiltersListItem;
