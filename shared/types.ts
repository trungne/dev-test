import React from "react"

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

export type CarState = 'used' | 'new-authorised' | 'new-parallel'

export type FeaturedVehicle = {
    name: string,
    photoURL: string,
    description: string,
    type: string,
    price: number
}

export type CarBrand = {
    id: number,
    name: string,
    description: string,
    numberOfModels: number,
    logoURL: string,
    lastUpdate: number,
    isActive: boolean,
}

export type AxiosBaseQueryResponse<Data> = {
    data: Data,
    msg: string,
}

export type AxiosBaseQueryError = {
    data: any,
    status: number
}

export type IconType = React.NamedExoticComponent<React.SVGProps<SVGSVGElement> & {
    width?: number,
    height?: number,
    fill?: string
}>