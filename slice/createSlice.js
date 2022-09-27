import { createSlice } from "@reduxjs/toolkit";

//! Create a slice with configure store and export it
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

//! Export action creator
export const { incremented, decremented } = counterSlice.actions;
