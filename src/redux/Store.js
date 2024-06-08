import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./slices/NavSlice";
import PageSlice from "./slices/PageSlice";
import userSlice from "./slices/userSlice";
import AuthSlice from "./slices/AuthSlice";
const store = configureStore({

   reducer:{
      nav:NavSlice,
      page:PageSlice,
      user:userSlice,
      auth:AuthSlice

   },

});




export default store; //# sourceURL=webpack:///./src/redux/Store.jsx?'
