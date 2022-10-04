import UnstyledButton from "components/Common/UnstyledButton";
import React from "react";
import { CDN_HOST } from "shared/constants";
import { CarInfo } from "shared/types";
import { useGetCarInfoQuery } from "store/carapi.slice";
import InfoCard, { AdvertiseCard } from "./InfoCard";

type Props = {
    defaultCarData: CarInfo[]
}
const CarList: React.FC<Props> = ({ defaultCarData }) => {
    // refetch car data to make sure that the data displayed is the latest one
    const { data } = useGetCarInfoQuery()


    return (
        <>
            <div className="grid place-items-center overflow-x-auto overflow-hidden
        ">
                <div className="
    mt-10 md:mt-40
    px-3 sm:px-6 md:px-10 lg:px-14
    grid grid-rows-1 grid-flow-col gap-x-10
    place-items-center
    md:grid-flow-row
    md:gap-y-6
    md:grid-cols-2
    lg:grid-cols-3 xl:grid-cols-4
    xl:max-w-[1242px]
    ">
                    <AdvertiseCard imageSrc={CDN_HOST + 'car_ad.png'} />
                    {defaultCarData.map(info => <InfoCard key={info.name + info.brandName + info.photoURL} carInfo={info} />)}
                </div>
            </div>
            <div className="flex mt-6 px-3">
                <UnstyledButton className="bg-white 
                font-['Poppins']
                font-normal
                ml-auto
                md:m-auto
                rounded 
                border !border-solid border-carbuyer-primary 
                text-base leading-6 text-carbuyer-primary  
                px-4 py-2">
                    View more new cars
                </UnstyledButton>
            </div>

        </>

    )
}

export default CarList