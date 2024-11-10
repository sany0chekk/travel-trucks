import React from "react";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  item: {
    key: string;
    value: string;
    icon: string;
    label: string;
  };
  onFilterChange: (filterKey: string, filterValue: string | boolean) => void;
}

const FiltersListItem: FC<Props> = ({ item, onFilterChange }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [isChecked, setIsChecked] = useState(
    searchParams.get(item.key) === item.value
  );

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);

    if (newCheckedState) {
      onFilterChange(item.key, item.value);
    } else {
      onFilterChange(item.key, "");
    }
  };

  useEffect(() => {
    setIsChecked(searchParams.get(item.key) === item.value);
  }, [location.search, item.key, item.value]);

  return (
    <li>
      <label
        className={`h-[96px] px-10 border rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors 
      ${isChecked ? "border-button" : "border-grayLight"}`}
      >
        <input
          type="checkbox"
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
