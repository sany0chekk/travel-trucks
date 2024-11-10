import { forwardRef } from "react";
import Button from "./ui/Button";
import { Vehicle } from "../models/vehicle";
import VehicleItemFeatures from "./VehicleItemFeatures";
import VehicleItemFavorite from "./VehicleItemFavorite";
import RatingAndLocation from "./RatingAndLocation";
import React from "react";

interface Props {
  vehicle: Vehicle;
}

const VehiclesItem = forwardRef<HTMLLIElement, Props>(({ vehicle }, ref) => {
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
    <li
      ref={ref}
      className="p-6 rounded-md border border-grayLight flex items-start gap-6"
    >
      <div className="hidden lg:flex max-w-[292px] min-h-full">
        <img
          className="w-full h-auto object-cover rounded-md"
          src={gallery[0].thumb}
          alt={name}
        />
      </div>
      <div className="w-full relative">
        <div className="flex max-md:flex-col md:items-center mb-4">
          <h2 className="font-semibold text-2xl max-md:pr-6 max-md:mb-2">
            {name}
          </h2>
          <p className="md:ml-auto font-semibold text-xl max-md:text-text md:text-2xl">
            €{price.toFixed(2)}
          </p>
          <VehicleItemFavorite
            vehicleId={id}
            className="max-md:absolute max-md:top-0 max-md:right-0 max-md:z-20"
          />
        </div>
        <RatingAndLocation
          rating={rating}
          reviews={reviews.length}
          location={location}
        />
        <p className="font-normal text-base mb-6 text-text truncate max-w-[200px] md:max-w-[500px] lg:max-w-[600px]">
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
          target="_blank"
          href={`${id}/features`}
          variant="filled"
          className="mt-6 py-4 px-10"
        >
          Show more
        </Button>
      </div>
    </li>
  );
});

export default VehiclesItem;
