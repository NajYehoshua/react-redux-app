import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../slice/createSlice";

//! create a redux store with slice reducer
export const store = configureStore({
  reducer: counterSlice.reducer,
});
