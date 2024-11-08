import { configureStore } from "@reduxjs/toolkit";
import vehiclesReducer from "./vehicles/slice";
import filtersReducer from "./filters/slice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    vehicles: vehiclesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
