import { configureStore } from "@reduxjs/toolkit";
import useDetailReducer from "./features/useDetailSlice";

export const store = configureStore({
    reducer:{
        app: useDetailReducer,
    },
});