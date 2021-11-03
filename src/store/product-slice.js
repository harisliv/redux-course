import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    totalQuantity: 0,
  },
  reducers: {
    addProduct(state, action) {
      state.totalQuantity++;
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

      if (existingItem.quantity > 0) {
        state.totalQuantity--;
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
