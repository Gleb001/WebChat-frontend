// import =================================================== //
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";

// main ===================================================== //
export const store = configureStore({
    reducer: {
        user: userReducer
    }
});