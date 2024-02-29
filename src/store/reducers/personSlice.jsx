import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    loadDetail: (state, action) => {
      state.info = action.payload;
    },

    removeDetail: (state, action) => {
      state.info = null;
    },
  },
});

export const { loadDetail, removeDetail } = personSlice.actions;
export default personSlice.reducer;
