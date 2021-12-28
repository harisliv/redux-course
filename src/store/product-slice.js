import { createSlice } from "@reduxjs/toolkit";
import { cartActions } from "./cart-slice";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.products = action.payload.products;
    },
    addProduct(state, action) {
      state.totalQuantity++;
      state.changed = true;
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.products.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
      }
    },
    removeProduct(state, action) {
      const existingItem = state.products.find(
        (item) => item.id === action.payload
      );

      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity > 0) {
        if (existingItem.quantity === 1) {
          state.products = state.products.filter(
            (item) => item.id !== action.payload
          );
        } else {
          existingItem.quantity--;
          existingItem.total = existingItem.quantity * existingItem.price;
        }
      }
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
