import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "shared/axios";
import { NEXT_API_BASE_URL } from "shared/constants";
import { CarBrand, CarInfo, FeaturedVehicle } from "shared/types";
export const carAPI = createApi({
    reducerPath: 'carAPI',
    baseQuery: axiosBaseQuery({ baseUrl: NEXT_API_BASE_URL }),
    tagTypes: ['CarBrands'],
    endpoints: (builder) => ({
        getCarInfo: builder.query<CarInfo[], void>({ query: () => ({ url: 'car', method: 'GET' }) }),
        getFeaturedVehicles: builder.query<FeaturedVehicle[], void>({
            query: () => ({ url: 'feature', method: 'GET' })
        }),
        getCarBrands: builder.query<CarBrand[], void>({
            query: () => ({ url: 'car-brand', method: 'GET' }),
            providesTags: (result) =>
                result ? [
                    ...result.map(({ id }) => {
                        return {
                            type: 'CarBrands' as const,
                            id
                        }
                    })
                ] : ['CarBrands']
        }),
        updateCarBrands: builder.mutation<string, CarBrand>({
            query: (brand) => ({ url: 'update-car-brand', method: 'POST', data: brand }),
            invalidatesTags: (_, __, arg) => [{ type: 'CarBrands', id: arg.id }]
        }),
        createCarBrands: builder.mutation<{ id: number }, Omit<CarBrand, 'id'>>({
            query: (brand) => ({ url: 'create-car-brand', method: 'POST', data: brand }),
            invalidatesTags: ['CarBrands']
        })
    })
})


export const {
    useGetCarInfoQuery,
    useGetFeaturedVehiclesQuery,
    useGetCarBrandsQuery,
    useUpdateCarBrandsMutation,
    useCreateCarBrandsMutation,
} = carAPI