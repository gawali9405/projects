import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch single order by user ID
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (userId) => {
    const res = await axios.get(`http://localhost:8000/user/get-order/${userId}`);
    return res.data.order; // ✅ Only return the order object
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    order: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ordersSlice.reducer;
