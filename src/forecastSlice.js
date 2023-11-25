import { createSlice } from "@reduxjs/toolkit";

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    start: (state) => {
      state.loading = true;
      state.error = null;
    },
    success: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { start, success, fail } = forecastSlice.actions;
export default forecastSlice.reducer;
