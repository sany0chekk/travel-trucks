import { useSelector } from "react-redux";
import { selectAllVehicles, selectLoading } from "../redux/vehicles/selectors";
import VehiclesItem from "./VehiclesItem";
import Loader from "./Loader";

const VehiclesList = () => {
  const vehicles = useSelector(selectAllVehicles);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading ? (
        <div className="w-full min-h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : vehicles.length > 0 ? (
        <ul className="grid gap-8 w-full">
          {vehicles.map((vehicle) => (
            <VehiclesItem key={vehicle.id} vehicle={vehicle} />
          ))}
        </ul>
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
