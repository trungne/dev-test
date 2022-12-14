import AdvertiseCard from "components/Common/AdvertiseCard";
import UnstyledButton from "components/Common/UnstyledButton";
import React from "react";
import { FeaturedVehicle } from "shared/types";
import { getCDNImage } from "shared/utils";
import { useGetFeaturedVehiclesQuery } from "store/carapi.slice";
import Card from "./Card";

const Feature: React.FC<{ featuredVehicles: FeaturedVehicle[] }> = ({ featuredVehicles }) => {
    // const { data: featuredVehicles } = useGetFeaturedVehiclesQuery()

    return (
        <div className="pt-[60px] md:pt-[80px] 
    md:pl-[60px] font-['Poppins'] text-center md:text-left">
            <div className="grid place-items-center md:place-content-start">
                <div className=" max-w-[678px] px-5 md:px-0">
                    <h1 className="text-[32px] md:text-[48px] 
            leadsing-[48px] md:leading-[72px] text-carbuyer-primary font-bold mt-0 mb-2">Our Featured Vehicles.</h1>
                    <h3 className="text-xl md:text-[32px]
             leading-[30px] md:leading-[48px] text-neutral-8 font-normal">One of our biggest product to be featured and that has sold out the most.</h3>
                </div>
            </div>

            <div className="relative">
                <div className="flex gap-10 overflow-x-scroll scrollbar-hide">
                    {Array.from(new Array(featuredVehicles.length + 1)).map((_, idx) => {
                        if (idx === 2) {
                            return <AdvertiseCard key={"advertise"} imageSrc={getCDNImage('car_ad.png')} />
                        }

                        const actualIndex = idx > 2 ? idx - 1 : idx
                        const vehicle = featuredVehicles[actualIndex]
                        return <Card key={vehicle.name + idx} vehicle={vehicle} />
                    })}
                </div>
                <UnstyledButton className="absolute top-[393px] right-[20px] md:top-[-70px] md:right-[60px] bg-carbuyer-primary text-white rounded-md py-[10px] px-12 font-bold text-base">View More</UnstyledButton>
            </div>
        </div>
    )
}

export default React.memo(Feature)