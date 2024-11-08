import { useDispatch, useSelector } from "react-redux";
import FiltersList from "./FiltersList";
import { selectAllVehiclesLocations } from "../redux/vehicles/selectors";
import { AppDispatch } from "../redux/store";
import { setFilter } from "../redux/filters/slice";
import { getAllVehicles } from "../redux/vehicles/operations";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import FiltersLocationSelect from "./FiltersLocationSelect";

const FilterSidebar = () => {
  const locations = useSelector(selectAllVehiclesLocations);
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  const equipment = [
    { key: "AC", value: "true", icon: "wind", label: "AC" },
    {
      key: "transmission",
      value: "automatic",
      icon: "diagram",
      label: "Automatic",
    },
    { key: "kitchen", value: "true", icon: "cup-hot", label: "Kitchen" },
    { key: "TV", value: "true", icon: "tv", label: "TV" },
    { key: "bathroom", value: "true", icon: "ph_shower", label: "Bathroom" },
  ];

  const types = [
    { key: "van", value: "true", icon: "bi_grid-1x2", label: "Van" },
    { key: "van", value: "true", icon: "bi_grid", label: "Fully Integrated" },
    { key: "alcove", value: "true", icon: "bi_grid-3x3-gap", label: "Alcove" },
  ];

  const handleFilterChange = (
    filterKey: string,
    filterValue?: string | boolean
  ) => {
    if (filterValue === "" || filterValue === undefined) {
      searchParams.delete(filterKey);
    } else {
      searchParams.set(filterKey, String(filterValue));
    }
    setSearchParams(searchParams);

    dispatch(setFilter({ filterKey, filterValue }));
    dispatch(getAllVehicles());
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const location = event.target.value;
    handleFilterChange("location", location);
  };

  useEffect(() => {
    searchParams.forEach((value, key) => {
      dispatch(setFilter({ filterKey: key, filterValue: value }));
    });

    dispatch(getAllVehicles());
  }, [dispatch, searchParams]);

  return (
    <aside className="max-w-[25%] w-full">
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
      <div>
        <p className="font-medium text-text mb-8">Filters</p>
        <div className="flex flex-col gap-6 mb-8">
          <h2 className="font-semibold text-xl">Vehicle equipment</h2>
          <span className="w-full h-[1px] bg-grayLight" />

          <FiltersList items={equipment} onFilterChange={handleFilterChange} />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-xl">Vehicle type</h2>
          <span className="w-full h-[1px] bg-grayLight" />
          <FiltersList items={types} onFilterChange={handleFilterChange} />
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
