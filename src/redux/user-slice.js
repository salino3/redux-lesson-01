import {createSlice} from '@reduxjs/toolkit';
import {mockData} from '../apis';



export const userSlice = createSlice({
  // slice name
  name: "users",
  initialState: mockData.sort((a, b) => b.id - a.id),
  reducers: {
    addUser: (state, action) => {
      return [action.payload, ...state];
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {addUser, changeEmail} = userSlice.actions;

export default userSlice.reducer;

