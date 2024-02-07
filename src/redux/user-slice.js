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
    changeDataUser: (state, action) => {
    return state.map((user) => user.id === action.payload.id ? action.payload : user )
    },
  },
});

export const { addUser, changeDataUser } = userSlice.actions;

export default userSlice.reducer;

