import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';


type InitialState = {
    isMobile: boolean
}

const initialState: InitialState = {
    isMobile: false // assume PC
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsMobile: (state, action: PayloadAction<InitialState['isMobile']>) => {
            state.isMobile = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.app,
            };
        }
    },
})


export const { actions: {
    setIsMobile
} } = appSlice

