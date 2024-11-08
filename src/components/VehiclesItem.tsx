import { FC } from "react";
import Button from "./ui/Button";
import { Vehicle } from "../models/vehicle";
import VehicleItemFeatures from "./VehicleItemFeatures";

interface Props {
  vehicle: Vehicle;
}

const VehiclesItem: FC<Props> = ({ vehicle }) => {
  const {
    id,
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
    transmission,
    microwave,
    gas,
    water,
  } = vehicle;

  return (
    <li className="p-6 rounded-md border border-grayLight flex items-start gap-6 max-h-[368px]">
      <div className="max-w-48 min-h-full flex">
        <img
          className="w-full h-auto object-cover rounded-md"
          src={gallery[0].thumb}
          alt={name}
        />
      </div>
      <div className="w-full">
        <div className="flex items-center mb-2">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <p className="ml-auto font-semibold text-2xl">€{price}</p>
          <button className="ml-3">
            <svg className="w-5 h-5 transition-colors hover:fill-button">
              <use href="./icons.svg#heart"></use>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 fill-rating">
              <use href="./icons.svg#star"></use>
            </svg>
            <p className="font-normal text-base">{`${rating}(${reviews.length} Reviews)`}</p>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4">
              <use href="./icons.svg#map"></use>
            </svg>
            <p className="font-normal text-base">{location}</p>
          </div>
        </div>
        <p className="font-normal text-base mb-6 text-text truncate max-w-[600px]">
          {description}
        </p>
        <VehicleItemFeatures
          engine={engine}
          AC={AC}
          bathroom={bathroom}
          kitchen={kitchen}
          TV={TV}
          radio={radio}
          refrigerator={refrigerator}
          microwave={microwave}
          gas={gas}
          transmission={transmission}
          water={water}
        />
        <Button
          type="link"
          href={`${id}/features`}
          variant="filled"
          className="mt-6 py-4 px-10"
        >
          Show more
        </Button>
      </div>
    </li>
  );
};

export default VehiclesItem;
