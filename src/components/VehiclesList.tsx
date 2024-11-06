import { useSelector } from "react-redux";
import { selectAllVehicles } from "../redux/vehicles/selectors";
import VehiclesItem from "./VehiclesItem";

const VehiclesList = () => {
  const vehicles = useSelector(selectAllVehicles);
  return (
    <ul className="grid gap-8">
      {vehicles.length > 0 &&
        vehicles.map((vehicle) => (
          <VehiclesItem key={vehicle.id} vehicle={vehicle} />
        ))}
    </ul>
  );
};

export default VehiclesList;
