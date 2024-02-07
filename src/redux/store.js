import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./user-slice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});






