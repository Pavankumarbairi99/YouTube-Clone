import { createSlice } from "@reduxjs/toolkit";

let SearchSlice = createSlice({
    name: "search",
    initialState: {
        searchText: "",
    },
    reducers: {
        addSearchResults: (state, action) => {
            state.searchText = action.payload
        }
    }
})
export const { addSearchResults } = SearchSlice.actions;
export default SearchSlice.reducer