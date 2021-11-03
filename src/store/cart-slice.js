import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: true, notification: null };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
