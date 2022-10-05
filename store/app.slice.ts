import { createSlice, PayloadAction } from '@reduxjs/toolkit'


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
    }
})


export const { actions: {
    setIsMobile
} } = appSlice

