import { createSlice } from "@reduxjs/toolkit";

let cacheStore = createSlice({
    name: "cache",
    initialState: {

    },
    reducers: {
        addCache: (state, action) => {
            state = Object.assign(state, action.payload);
        }
    }
})
export const { addCache } = cacheStore.actions;
export default cacheStore.reducer;