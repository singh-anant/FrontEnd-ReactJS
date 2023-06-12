import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";

const store = configureStore({
  //Slices
  reducer: {
    cart: cartSlice,
  },
});

export default store;
