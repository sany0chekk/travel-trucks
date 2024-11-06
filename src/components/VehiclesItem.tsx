import { FC } from "react";
import Button from "./ui/Button";
import { Vehicle } from "../models/vehicle";

interface Props {
  vehicle: Vehicle;
}

const VehiclesItem: FC<Props> = ({
  vehicle: {
    name,
    price,
    gallery,
    rating,
    reviews,
    location,
    description,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  },
}) => {
  return (
    <li className="p-6 rounded-md border border-grayLight flex items-start gap-6">
      <div className="max-w-48">
        <img
          className="w-full min-h-full object-cover rounded-md"
          src={gallery[0].thumb}
          alt={name}
        />
      </div>
      <div>
        <div className="flex">
          <h2>{name}</h2>
          <p className="ml-auto">€{price}</p>
          <button className="ml-3">
            <svg className="w-5 h-5 transition-colors hover:fill-button">
              <use href="./icons.svg#heart"></use>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 fill-rating">
              <use href="./icons.svg#star"></use>
            </svg>
            <p>{`${rating}(${reviews.length} Reviews)`}</p>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4">
              <use href="./icons.svg#map"></use>
            </svg>
            <p>{location}</p>
          </div>
        </div>
        <p>{description}</p>
        <ul className="grid grid-cols-3 gap-2">
          {engine && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5">
                <use href="./icons.svg#fuel-pump"></use>
              </svg>
              <p className="capitalize">{engine}</p>
            </li>
          )}
          {AC && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5">
                <use href="./icons.svg#wind"></use>
              </svg>
              <p>AC</p>
            </li>
          )}
          {bathroom && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5">
                <use href="./icons.svg#ph_shower"></use>
              </svg>
              <p className="capitalize">Bathroom</p>
            </li>
          )}
          {kitchen && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5">
                <use href="./icons.svg#cup-hot"></use>
              </svg>
              <p className="capitalize">Kitchen</p>
            </li>
          )}
          {TV && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5">
                <use href="./icons.svg#tv"></use>
              </svg>
              <p className="capitalize">TV</p>
            </li>
          )}
          {radio && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5">
                <use href="./icons.svg#ui-radios"></use>
              </svg>
              <p className="capitalize">Radio</p>
            </li>
          )}
          {refrigerator && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5">
                <use href="./icons.svg#solar_fridge-outline"></use>
              </svg>
              <p className="capitalize">Refrigerator</p>
            </li>
          )}
          {microwave && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5 fill-none stroke-black">
                <use href="./icons.svg#lucide_microwave"></use>
              </svg>
              <p className="capitalize">Microwave</p>
            </li>
          )}
          {gas && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5 fill-none stroke-black">
                <use href="./icons.svg#hugeicons_gas-stove"></use>
              </svg>
              <p className="capitalize">Gas</p>
            </li>
          )}
          {water && (
            <li className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges">
              <svg className="w-5 h-5 fill-none stroke-black">
                <use href="./icons.svg#ion_water-outline"></use>
              </svg>
              <p className="capitalize">Water</p>
            </li>
          )}
        </ul>
        <Button variant="filled" className="py-4 px-10">
          Show more
        </Button>
      </div>
    </li>
  );
};

export default VehiclesItem;
