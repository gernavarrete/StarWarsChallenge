import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./features/peoples/storeSlice";

export const store = configureStore({
  reducer: {
    peopleReducer,
  },
});
