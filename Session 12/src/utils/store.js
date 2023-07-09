import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import authSlice from "./authSlice.js";

const store = configureStore({
  //Slices
  reducer: {
    cart: cartSlice,
    auth: authSlice,
  },
});

export default store;
