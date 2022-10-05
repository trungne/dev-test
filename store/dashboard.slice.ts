import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';


type InitialState = {
    viewCarBrandOption: 'all' | 'last-updated' | 'brand-name' | 'number-of-models'
}

const initialState: InitialState = {
    viewCarBrandOption: 'all' // assume PC
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setViewOption: (state, action: PayloadAction<InitialState['viewCarBrandOption']>) => {
            state.viewCarBrandOption = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.dashboard,
            };
        }
    },
})


export const { actions: {
    setViewOption
} } = dashboardSlice

