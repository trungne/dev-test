import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "shared/axios";
import { NEXT_API_BASE_URL } from "shared/constants";
import { CarInfo } from "shared/types";
export const carAPI = createApi({
    reducerPath: 'carAPI',
    baseQuery: axiosBaseQuery({ baseUrl: NEXT_API_BASE_URL }),
    endpoints: (builder) => ({
        getCarInfo: builder.query<CarInfo[], void>({ query: () => ({ url: 'car', method: 'GET' }) })
    })
})


export const {
    useGetCarInfoQuery
} = carAPI