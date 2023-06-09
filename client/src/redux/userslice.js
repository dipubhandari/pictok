import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isLoggedIn: false,
    token: '',
    id: '',
    username: '',
    email: '',
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoginDetails: (state, actions) => {
           
            if (actions.payload) {
                const { token, id, email, username } = actions.payload
                state.token = token
                state.id = id
                state.email = email
                state.username = username
            }
            state.isLoggedIn = !state.isLoggedIn
         
        },
    }
});

export const { setLoginDetails } = userSlice.actions;
export default userSlice.reducer;