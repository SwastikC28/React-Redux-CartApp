import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    isCartVisible: true,
  },
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
