import { configureStore } from "@reduxjs/toolkit";
import authSliceReducers from "./authSlice";

const store = configureStore({
  reducer: authSliceReducers,
});

export default store;
