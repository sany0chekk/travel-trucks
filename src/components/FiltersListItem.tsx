import { FC } from "react";

interface Props {
  item: {
    icon: string;
    label: string;
  };
}

const FiltersListItem: FC<Props> = ({ item }) => {
  return (
    <li className="h-[96px] px-10 border border-grayLight rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors hover:border-button focus:border-button">
      <svg className="w-8 h-8 mb-2">
        <use href={`./icons.svg#${item.icon}`}></use>
      </svg>
      <p className="text-center">{item.label}</p>
    </li>
  );
};

export default FiltersListItem;
