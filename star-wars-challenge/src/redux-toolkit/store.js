import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./features/peoples/storeSlice";

export const store = configureStore({
  reducer: {
    storeReducer,
  },
});
