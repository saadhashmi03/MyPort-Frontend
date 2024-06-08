import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    user: null,
    authEmail: null,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null; // Clear user data on logout
      state.authEmail = null; // Clear auth email on logout
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthEmail: (state, action) => {
      state.authEmail = action.payload;
    },
  },
});

export const { login, logout, setUser, setAuthEmail } = authSlice.actions;
export default authSlice.reducer;
