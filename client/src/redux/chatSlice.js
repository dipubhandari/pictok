import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    chatusername: '',
    chatemail: '',
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatDetails: (state, actions) => {
            if (actions.payload) {

                const { email, username } = actions.payload
                state.chatemail = email
                state.chatusername = username
                console.log(state)
            }


        },
    }
});

export const { setChatDetails } = chatSlice.actions;
export default chatSlice.reducer;