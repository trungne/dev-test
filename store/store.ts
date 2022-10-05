import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { appSlice } from "./app.slice";

import { carAPI } from "./carapi.slice";

export const store = configureStore({
    reducer: {
        [carAPI.reducerPath]: carAPI.reducer,
        [appSlice.name]: appSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(carAPI.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppState = () => useSelector((s: RootState) => s[appSlice.name])
