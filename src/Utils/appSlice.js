import { createSlice } from "@reduxjs/toolkit";

let appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleSlide: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
})
export const { toggleSlide, closeMenu } = appSlice.actions;
export default appSlice.reducer;