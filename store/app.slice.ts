import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import { CarState } from 'shared/types';


type InitialState = {
    isMobile: boolean
    carState?: CarState,
    priceRange?: { min: number, max: number },
    vehicleTypes: string[]
}

const initialState: InitialState = {
    isMobile: false, // assume PC
    vehicleTypes: []
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsMobile: (state, action: PayloadAction<InitialState['isMobile']>) => {
            state.isMobile = action.payload
        },
        setCarState: (state, action: PayloadAction<InitialState['carState']>) => {
            state.carState = action.payload
        },
        setPriceRange: (state, action: PayloadAction<InitialState['priceRange']>) => {
            state.priceRange = action.payload
        },
        setVehicleTypes: (state, action: PayloadAction<InitialState['vehicleTypes']>) => {
            state.vehicleTypes = action.payload
        },
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
    setIsMobile,
    setCarState,
    setPriceRange,
    setVehicleTypes
} } = appSlice

