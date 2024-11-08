import { RootState } from "../store";

export const selectAllVehicles = (state: RootState) => state.vehicles.vehicles;
export const selectVehicleById = (state: RootState) =>
  state.vehicles.selectedVehicle;
