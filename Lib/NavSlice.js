import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Fullnav: false,
};

const NavSlice = createSlice({
  name: "Nav",
  initialState,
  reducers: {
    opennav: (state, action) => {
      state.Fullnav = true;
    },
    closenav: (state, action) => {
      state.Fullnav = false;
    },
  },
});

export const Navsl = NavSlice.reducer;
export const { opennav, closenav } = NavSlice.actions;
export const navwidth = (state) => state.Navsl.Fullnav;
