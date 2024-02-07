import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../apis";


export const idSlice = createSlice({
  // slice name
  name: "newID",
  initialState: mockData.length + 1,
  reducers: {
    plusOne: (state) => {
      return state + 1;
    },
  },
});

export const { plusOne } = idSlice.actions;

export default idSlice.reducer;