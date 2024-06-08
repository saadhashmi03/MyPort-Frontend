import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
  name: "nav",
  initialState: {
    toggleNavbar: false,
  },
  reducers:{
    toggle:(state)=>{
        state.toggleNavbar = !state.toggleNavbar;
    }
  }
});

export const {toggle}=NavSlice.actions;
export default NavSlice.reducer;

