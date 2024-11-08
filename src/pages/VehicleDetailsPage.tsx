import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { getVehicleById } from "../redux/vehicles/operations";
import { selectVehicleById } from "../redux/vehicles/selectors";

const VehicleDetailsPage = () => {
  const { vehicleId } = useParams();
  const vehicleById = useSelector(selectVehicleById);
  console.log(vehicleById);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!vehicleId) return;
    dispatch(getVehicleById(vehicleId));
  }, [vehicleId, dispatch]);

  return <section></section>;
};

export default VehicleDetailsPage;
