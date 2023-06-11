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
                const { token, id, email, username, isLoggedIn } = actions.payload
                state.isLoggedIn = isLoggedIn
                state.token = token
                state.id = id
                state.email = email
                state.username = username
            }

        }, logout: (state, actions) => {
            state.isLoggedIn = false
            state.token = ''
            state.id = ''
            state.email = ''
            state.username = ''
        },
    }

});

export const { setLoginDetails, logout } = userSlice.actions;
export default userSlice.reducer;