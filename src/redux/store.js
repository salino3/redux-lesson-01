import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./user-slice";
import idSlice from './new-id-slice';

export const store = configureStore({
  reducer: {
    users: userSlice,
    newID: idSlice
  },
});






