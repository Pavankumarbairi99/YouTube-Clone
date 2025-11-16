import { createSlice } from "@reduxjs/toolkit";

let liveMessageSlice = createSlice({
    name: "chat",
    initialState: {
        message: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.message.splice(20, 1)
            state.message.unshift(action.payload)
        }
    }
})
export const { addMessage } = liveMessageSlice.actions;
export default liveMessageSlice.reducer;