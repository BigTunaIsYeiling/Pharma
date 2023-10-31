import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  position: { x: 0, y: 0 },
};

const DialogSlice = createSlice({
  name: "Dia",
  initialState,
  reducers: {
    Dragging: (state, action) => {
      state.position = action.payload;
      console.log(state.position);
    },
  },
});

export const DialogReducer = DialogSlice.reducer;
export const { Dragging } = DialogSlice.actions;
export const DialogPosition = (state) => state.DialogReducer.position;
