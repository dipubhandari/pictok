import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    file: ''
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        post: (state, payload) => {

            state.file = payload.payload;
        }
    }

});

export const { post } = postSlice.actions;
export default postSlice.reducer;