import {createSlice} from '@reduxjs/toolkit';


const initialState = {

    name: "",
    username: "",
    email: ""
};

export const userSlice = createSlice({
    // slice name
   name: "user",
   initialState,
   reducers: {
    addUser: (state, action) => {
        const {name, username, email} = action.payload;
        state.name = name;
        state.username = username;
        state.email = email;
    },
    changeEmail: (state, action) => {
        state.email = action.payload
    }
   }
});

export const {addUser, changeEmail} = userSlice.actions;
console.log("here", userSlice)
export default userSlice.reducer;

