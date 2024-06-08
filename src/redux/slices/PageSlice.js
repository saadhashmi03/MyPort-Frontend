import {createSlice} from "@reduxjs/toolkit"

const PageSlice= createSlice({
    name:"page",
    initialState:{
        page:"CreateProjects",
    },
    reducers:{
        setPage:(state,action)=>{
            state.page = action.payload;
        },
    },
});
export const { setPage } = PageSlice.actions;
export default PageSlice.reducer;

