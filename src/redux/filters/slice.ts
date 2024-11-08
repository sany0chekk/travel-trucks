import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  filters: { [key: string]: string | boolean };
}

const initialState: FiltersState = {
  filters: {},
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        filterKey: string;
        filterValue: string | boolean | undefined;
      }>
    ) => {
      const { filterKey, filterValue } = action.payload;
      if (filterValue === undefined) {
        delete state.filters[filterKey];
      } else {
        state.filters[filterKey] = filterValue;
      }
    },
    resetFilters: (state) => {
      state.filters = {};
    },
  },
});

export const { setFilter, resetFilters } = slice.actions;

export default slice.reducer;
