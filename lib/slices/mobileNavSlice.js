import { createSlice } from "@reduxjs/toolkit";



const mobileNavSlice = createSlice({
    name:"mobileNavSlice",
    initialState:{
        mobileNavState:false
    },
    reducers:{
        mobileNavStateHandler(state,action){
            state.mobileNavState = action.payload;
        }
    }
})

export const mobileNavSliceActions = mobileNavSlice.actions;


export default mobileNavSlice.reducer;