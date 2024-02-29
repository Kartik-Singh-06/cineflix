import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info : null,
}

export const tvSlice = createSlice({
   name : 'tv',
   initialState ,
   reducers : {
    loadDetail: (state,action)=>{
        state.info  = action.payload;
    }, 
    removeDetail : (state)=>{
      state.info = null
    }
   }
})

export const {loadDetail,removeDetail} = tvSlice.actions;
export default tvSlice.reducer;