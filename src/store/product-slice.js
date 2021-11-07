import { createSlice } from "@reduxjs/toolkit";
import { cartActions } from "./cart-slice";

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "sending",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-test-cart-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Shopping cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data suxxessfully",
        })
      );

    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }

  };
};

export const productActions = productSlice.actions;

export default productSlice;
