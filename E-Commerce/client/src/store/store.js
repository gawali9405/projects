import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import cartReducer from "./cartSlice.js";
import useReducer  from "./userSlice.js" 
import addressReducer from "./addrssSlice.js"

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user:useReducer,
    address:addressReducer
  },
});

export default store;
