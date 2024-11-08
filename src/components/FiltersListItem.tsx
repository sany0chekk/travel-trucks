import { FC, useState } from "react";

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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    console.log(newCheckedState);

    if (newCheckedState) {
      onFilterChange(item.key, item.value);
    } else {
      onFilterChange(item.key, "");
    }
  };

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
