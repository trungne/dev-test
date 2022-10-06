import AdvertiseCard from "components/Common/AdvertiseCard";
import UnstyledButton from "components/Common/UnstyledButton";
import React from "react";
import { CarInfo } from "shared/types";
import { getCDNImage } from "shared/utils";
import { useGetCarInfoQuery } from "store/carapi.slice";
import InfoCard from "./InfoCard";
import { useAppState } from "store/store";

const CarList: React.FC<{ carData: CarInfo[] }> = ({ carData }) => {
    // const { data: carData } = useGetCarInfoQuery()
    const { isMobile, carState, priceRange, vehicleTypes } = useAppState()
    const idxToRenderAds = React.useMemo(() => {
        return isMobile ? 2 : 0
    }, [isMobile])

    const filteredCars = React.useMemo(() => {
        // TODO: filter more based on car state and vehicle types
        return carData.filter(car => {
            if (priceRange === undefined) {
                return true
            }
            return car.totalPrice && car.totalPrice >= priceRange.min && car.totalPrice <= priceRange.max
        })
    }, [priceRange, carData])


    return (
        <>
            <div className="grid place-items-center overflow-x-auto overflow-hidden scrollbar-hide
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
                    <>{Array.from(new Array(filteredCars.length + 1)).map((_, idx) => {
                        if (idx === idxToRenderAds) {
                            return <AdvertiseCard key={"advertise"} imageSrc={getCDNImage('car_ad.png')} />
                        }
                        const actualIndex = idx > idxToRenderAds ? idx - 1 : idx
                        const info = carData[actualIndex]
                        return <InfoCard key={info.name + info.brandName + info.photoURL} carInfo={info} />
                    })}</>

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

export default React.memo(CarList)