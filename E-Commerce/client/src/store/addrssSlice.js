import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: "address",
  initialState: {
    userAddress: []
  },
  reducers: {
    // Add a new address
    addAddress: (state, action) => {
      state.userAddress.push(action.payload);
    },

    // Set all addresses (used after fetch)
    setAddresses: (state, action) => {
      state.userAddress = action.payload;
    },

    // Update an existing address using _id
    updateAddress: (state, action) => {
      const index = state.userAddress.findIndex(address => address._id === action.payload._id);
      if (index !== -1) {
        state.userAddress[index] = { ...state.userAddress[index], ...action.payload };
      }
    },

    // Remove an address using _id
    removeAddress: (state, action) => {
      state.userAddress = state.userAddress.filter(address => address._id !== action.payload);
    }
  }
});

export const { addAddress, setAddresses, updateAddress, removeAddress } = addressSlice.actions;

export default addressSlice.reducer;
