import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  locations: string[];
  handleLocationChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FiltersLocationSelect: FC<Props> = ({
  locations,
  handleLocationChange,
}) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const locationParam = searchParams.get("location");

    if (locationParam) {
      setSelectedLocation(locationParam);
    }
  }, [location.search]);

  return (
    <select
      name="location"
      id="location"
      className="bg-transparent w-full h-full outline-none font-normal text-base"
      onChange={(e) => {
        handleLocationChange(e);
        setSelectedLocation(e.target.value);
      }}
      value={selectedLocation}
    >
      <option value="">All</option>
      {locations.length > 0 &&
        locations.map((location: string, index: number) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
    </select>
  );
};

export default FiltersLocationSelect;
