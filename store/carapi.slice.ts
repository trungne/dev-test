import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "shared/axios";
import { NEXT_API_BASE_URL } from "shared/constants";
import { CarBrand, CarInfo, FeaturedVehicle } from "shared/types";
export const carAPI = createApi({
    reducerPath: 'carAPI',
    baseQuery: axiosBaseQuery({ baseUrl: NEXT_API_BASE_URL }),
    endpoints: (builder) => ({
        getCarInfo: builder.query<CarInfo[], void>({ query: () => ({ url: 'car', method: 'GET' }) }),
        getFeaturedVehicles: builder.query<FeaturedVehicle[], void>({
            query: () => ({ url: 'feature', method: 'GET' })
        }),
        getCarBrands: builder.query<CarBrand[], void>({
            query: () => ({ url: 'car-brand', method: 'GET' })
        })
    })
})


export const {
    useGetCarInfoQuery,
    useGetFeaturedVehiclesQuery,
    useGetCarBrandsQuery
} = carAPI