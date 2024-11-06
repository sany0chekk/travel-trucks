import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      type: "",
      brand: "",
      priceRange: [0, 100000],
    },
  },
  reducers: {},
});

export default slice.reducer;
