import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import cartReducer from "./cartSlice.js";
import useReducer  from "./userSlice.js" 
import addressReducer from "./addrssSlice.js"
import orderReducer from "./orderSlice.js"

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    user:useReducer,
    address:addressReducer,
    orders: orderReducer,
  },
});

export default store;
