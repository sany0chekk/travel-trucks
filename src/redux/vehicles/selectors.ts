import { RootState } from "../store";

export const selectAllVehicles = (state: RootState) => state.vehicles.vehicles;
export const selectAllVehiclesLocations = (state: RootState) =>
  state.vehicles.locations;

export const selectVehicleById = (state: RootState) =>
  state.vehicles.selectedVehicle;

export const selectDetailsLoading = (state: RootState) =>
  state.vehicles.detailsLoading;

export const selectLoading = (state: RootState) => state.vehicles.loading;
