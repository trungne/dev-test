export type CarInfo = {
    name: string,
    totalPrice: number | null,
    pricePerMonth: number,
    variants: number,
    withCOE: boolean,
    brandLogo: string,
    brandName: string,
    photoURL: string,
}

export type FeaturedVehicle = {
    name: string,
    photoURL: string,
    description: string,
    type: string,
    price: number
}

export type AxiosBaseQueryResponse<Data> = {
    data: Data,
    msg: string,
}

export type AxiosBaseQueryError = {
    data: any,
    status: number
}
