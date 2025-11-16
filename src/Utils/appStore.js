import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheStore from "./cacheStore";
import searchReducer from "./searchSlice";
import chatReducer from "./livemsgSlice";
let store = configureStore({
    reducer: {
        app: appSlice,
        cache: cacheStore,
        search: searchReducer,
        chat: chatReducer,
    }

})
export default store;