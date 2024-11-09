import { useDispatch, useSelector } from "react-redux";
import {
  selectAllVehicles,
  selectLoading,
  selectDisplayedVehicles,
} from "../redux/vehicles/selectors";
import VehiclesItem from "./VehiclesItem";
import Loader from "./Loader";
import { loadMoreVehicles } from "../redux/vehicles/slice";
import Button from "./ui/Button";

const VehiclesList = () => {
  const vehicles = useSelector(selectAllVehicles);
  const isLoading = useSelector(selectLoading);
  const displayedVehicles = useSelector(selectDisplayedVehicles);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(loadMoreVehicles());
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full min-h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : vehicles.length > 0 ? (
        <div className="flex flex-col">
          <ul className="grid gap-8 w-full">
            {vehicles.slice(0, displayedVehicles).map((vehicle) => (
              <VehiclesItem key={vehicle.id} vehicle={vehicle} />
            ))}
          </ul>
          {displayedVehicles < vehicles.length && (
            <div className="w-full flex items-center justify-center mt-8">
              <Button
                variant="bordered"
                onClick={handleLoadMore}
                className="py-4 px-8"
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full min-h-full flex items-center justify-center">
          <p className="text-center font-bold text-xl">
            No results found for your request
          </p>
        </div>
      )}
    </>
  );
};

export default VehiclesList;
