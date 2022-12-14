import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { appSlice } from "./app.slice";
import { createWrapper } from 'next-redux-wrapper';

import { carAPI } from "./carapi.slice";
import { dashboardSlice } from "./dashboard.slice";
import { useDispatch } from "react-redux";

// export const store = configureStore({
//     reducer: {
//         [carAPI.reducerPath]: carAPI.reducer,
//         [appSlice.name]: appSlice.reducer
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(carAPI.middleware),
// });

// setupListeners(store.dispatch);


const makeStore = () => configureStore({
    reducer: {
        [carAPI.reducerPath]: carAPI.reducer,
        [appSlice.name]: appSlice.reducer,
        [dashboardSlice.name]: dashboardSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(carAPI.middleware),
    devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export const useAppState = () => useSelector((s: AppState) => s[appSlice.name])
export const useDashboardState = () => useSelector((s: AppState) => s[dashboardSlice.name])
export const useAppDispatch: () => AppDispatch = useDispatch
export const wrapper = createWrapper<AppStore>(makeStore);
