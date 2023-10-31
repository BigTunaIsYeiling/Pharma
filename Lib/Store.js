import { configureStore } from "@reduxjs/toolkit";
import { Navsl } from "./NavSlice";
import { FiltersReducer } from "./FiltersSlice";
import { DialogReducer } from "./DialogSlice";
const Store = configureStore({
  reducer: {
    Navsl,
    FiltersReducer,
    DialogReducer,
  },
});
export default Store;
