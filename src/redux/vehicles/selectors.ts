import { RootState } from "../store";

export const selectAllVehicles = (state: RootState) => state.vehicles.vehicles;
