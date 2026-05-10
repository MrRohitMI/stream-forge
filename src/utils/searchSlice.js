import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    storeCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { storeCache } = searchSlice.actions;
export default searchSlice.reducer;
