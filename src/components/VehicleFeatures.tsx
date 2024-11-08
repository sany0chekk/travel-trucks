import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { getVehicleById } from "../redux/vehicles/operations";
import { selectVehicleById } from "../redux/vehicles/selectors";
import VehicleItemFeatures from "./VehicleItemFeatures";

const VehicleFeatures = () => {
  const { vehicleId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const vehicleById = useSelector(selectVehicleById);

  useEffect(() => {
    if (!vehicleId || vehicleById) return;
    dispatch(getVehicleById(vehicleId));
  }, [vehicleId, vehicleById, dispatch]);

  if (!vehicleById) return;
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
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
  } = vehicleById;

  return (
    <div className="bg-inputs rounded-xl py-11 px-14">
      <div className="mb-24">
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
          water={water}
          transmission={transmission}
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-semibold text-xl">Vehicle details</p>
        <span className="w-full h-[1px] bg-grayLight" />
        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between">
            <p className=" font-medium text-base capitalize">Form</p>
            <p className=" font-medium text-base capitalize">{form}</p>
          </li>
          <li className="flex items-center justify-between">
            <p className=" font-medium text-base capitalize">Length</p>
            <p className=" font-medium text-base capitalize">{length}</p>
          </li>
          <li className="flex items-center justify-between">
            <p className=" font-medium text-base capitalize">Width</p>
            <p className=" font-medium text-base capitalize">{width}</p>
          </li>
          <li className="flex items-center justify-between">
            <p className=" font-medium text-base capitalize">Height</p>
            <p className=" font-medium text-base capitalize">{height}</p>
          </li>
          <li className="flex items-center justify-between">
            <p className=" font-medium text-base capitalize">Tank</p>
            <p className=" font-medium text-base capitalize">{tank}</p>
          </li>
          <li className="flex items-center justify-between">
            <p className=" font-medium text-base capitalize">consumption</p>
            <p className=" font-medium text-base capitalize">{consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default VehicleFeatures;
