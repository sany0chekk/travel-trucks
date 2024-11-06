import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllVehicles } from "./operations";
import { Vehicle } from "../../models/vehicle";

interface VehiclesState {
  vehicles: Vehicle[];
  selectedVehicles: Vehicle[];
  loading: boolean;
  error: string | null;
}

const initialState: VehiclesState = {
  vehicles: [],
  selectedVehicles: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllVehicles.fulfilled,
        (state, action: PayloadAction<Vehicle[]>) => {
          state.vehicles = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(getAllVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      }),
});

export default slice.reducer;
