import { useDispatch, useSelector } from "react-redux";
import FiltersList from "./FiltersList";
import { selectAllVehiclesLocations } from "../redux/vehicles/selectors";
import { AppDispatch } from "../redux/store";
import { setFilter } from "../redux/filters/slice";
import { getAllVehicles } from "../redux/vehicles/operations";
import { useSearchParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { filtersTypes, filtersEquipment } from "../constants/filtersOptions";
import FiltersLocationSelect from "./FiltersLocationSelect";
import React from "react";
import Button from "./ui/Button";

interface Props {
  onClose: () => void;
}

const FilterSidebar: FC<Props> = ({ onClose }) => {
  const locations = useSelector(selectAllVehiclesLocations);
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  const [pendingFilters, setPendingFilters] = useState(
    new URLSearchParams(searchParams)
  );

  const handleFilterChange = (
    filterKey: string,
    filterValue?: string | boolean
  ) => {
    const updatedFilters = new URLSearchParams(pendingFilters);

    if (filterValue === "" || filterValue === undefined) {
      updatedFilters.delete(filterKey);
    } else {
      updatedFilters.set(filterKey, String(filterValue));
    }

    setPendingFilters(updatedFilters);
    dispatch(setFilter({ filterKey, filterValue: filterValue ?? "" }));
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const location = event.target.value;
    handleFilterChange("location", location);
  };

  const handleSubmit = () => {
    setSearchParams(pendingFilters);
    dispatch(getAllVehicles());
  };

  useEffect(() => {
    searchParams.forEach((value, key) => {
      dispatch(setFilter({ filterKey: key, filterValue: value }));
    });
    dispatch(getAllVehicles());
  }, [dispatch, searchParams]);

  return (
    <div className="flex flex-col">
      <button onClick={onClose} className="desktop:hidden ml-auto mb-4 text-xl">
        &#x2715;
      </button>
      <div className="mb-10">
        <p className="font-normal text-gray">Location</p>
        <div className="input w-full flex items-center gap-2">
          <label htmlFor="location">
            <svg className="w-4 h-4 fill-gray">
              <use href="/icons.svg#map"></use>
            </svg>
          </label>
          <FiltersLocationSelect
            locations={locations}
            handleLocationChange={handleLocationChange}
          />
        </div>
      </div>
      <div className="mb-10">
        <p className="font-medium text-text mb-8">Filters</p>
        <div className="flex flex-col gap-6 mb-8">
          <h2 className="font-semibold text-xl">Vehicle equipment</h2>
          <span className="w-full h-[1px] bg-grayLight" />
          <FiltersList
            items={filtersEquipment}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-xl">Vehicle type</h2>
          <span className="w-full h-[1px] bg-grayLight" />
          <FiltersList
            items={filtersTypes}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        variant="filled"
        className="mr-auto py-4 px-14"
      >
        Submit
      </Button>
    </div>
  );
};

export default FilterSidebar;
