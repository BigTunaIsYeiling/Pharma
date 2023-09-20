import { configureStore } from "@reduxjs/toolkit";
import { Navsl } from "./NavSlice";
import { FiltersReducer } from "./FiltersSlice";
const Store = configureStore({
  reducer: {
    Navsl,
    FiltersReducer,
  },
});
export default Store;
