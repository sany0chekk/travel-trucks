import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllVehicles,
  getAllVehiclesLocation,
  getVehicleById,
} from "./operations";
import { Vehicle } from "../../models/vehicle";

interface VehiclesState {
  vehicles: Vehicle[];
  displayedVehicles: number;
  selectedVehicle: Vehicle | null;
  locations: string[];
  loading: boolean;
  detailsLoading: boolean;
  error: string | null;
}

const initialState: VehiclesState = {
  vehicles: [],
  displayedVehicles: 5,
  locations: [],
  selectedVehicle: null,
  loading: false,
  detailsLoading: false,
  error: null,
};

const slice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    loadMoreVehicles: (state) => {
      state.displayedVehicles += 5;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllVehicles.fulfilled,
        (state, action: PayloadAction<Vehicle[]>) => {
          state.displayedVehicles = 5;
          state.vehicles = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(getAllVehicles.rejected, (state, action) => {
        state.vehicles = [];
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(getAllVehiclesLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllVehiclesLocation.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.locations = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(getAllVehiclesLocation.rejected, (state, action) => {
        state.locations = [];
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(getVehicleById.pending, (state) => {
        state.detailsLoading = true;
        state.error = null;
      })
      .addCase(
        getVehicleById.fulfilled,
        (state, action: PayloadAction<Vehicle>) => {
          state.selectedVehicle = action.payload;
          state.detailsLoading = false;
          state.error = null;
        }
      )
      .addCase(getVehicleById.rejected, (state, action) => {
        state.detailsLoading = false;
        state.error = action.error.message || null;
      }),
});

export const { loadMoreVehicles } = slice.actions;
export default slice.reducer;
