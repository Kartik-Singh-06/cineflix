import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   info : null
}

export const movieSlice = createSlice({
    name : 'movie',
    initialState,
    reducers:{
        loadDetail:(state,action)=>{
            state.info = action.payload
        },
        removeDetail:(state,action)=>{
            state.info = null;
        },

    },
});

export const {loadDetail,removeDetail} = movieSlice.actions;

export default movieSlice.reducer;