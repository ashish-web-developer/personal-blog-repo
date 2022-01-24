import { createSlice, configureStore } from "@reduxjs/toolkit";
import mobileNavSlice from "./lib/slices/mobileNavSlice";

const store = configureStore({
  reducer: {
    mobileNav: mobileNavSlice,
  },
});

export default store;
