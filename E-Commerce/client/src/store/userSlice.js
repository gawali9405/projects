import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: null, // Store user object here
  },
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
    },
    logout: (state) => {
      state.users = null;
    },
  },
});

export const { addUser, logout } = userSlice.actions;
export default userSlice.reducer;
