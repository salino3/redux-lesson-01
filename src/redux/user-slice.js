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
    deleteUser: (state, action) => {
        return state.filter((user) => user.id !== action.payload)
    }
  },
});

export const { addUser, changeDataUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

