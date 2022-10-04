import Image from "next/image";
import React from "react";
import { FeaturedVehicle } from "shared/types";

const Card: React.FC<{ vehicle: FeaturedVehicle }> = ({ vehicle }) => {
    return <div className="relative w-[415px] min-h-[361px] bg-white rounded-tr-[40px] rounded-bl-[40px] pt-2 px-7">
        <Image width={350} height={200} layout="fixed" objectFit="contain" alt={vehicle.name + ' photo'} src={vehicle.photoURL} />
        <div className="mt-[56px] flex justify-between items-center">
            <div className="text-neutral-8">
                <h2 className="mt-0 mb-0 text-[32px] leading-[48px]">{vehicle.name}</h2>
                <h3 className="mt-0 mb-0 text-[18px] leading-[28px] font-normal">{vehicle.description}</h3>
            </div>
            <div className="text-neutral-8 self-end">
                <h3 className="mt-0 mb-0 text-[18px] leading-[28px] font-normal">{vehicle.type}</h3>
                <h2 className="mt-0 mb-0 text-carbuyer-primary text-[18px] leading-[28px] font-black">${vehicle.price}</h2>
            </div>
        </div>
    </div>
}

export default Card