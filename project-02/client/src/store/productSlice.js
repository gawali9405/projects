import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    removeProduct: (state) => {
      state.products = [];
    },
  },
});

export const { setProducts, removeProduct } = productSlice.actions;
export default productSlice.reducer;
