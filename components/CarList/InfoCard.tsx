import React from "react";
import { Paper } from '@mantine/core'
import { CarInfo } from "shared/types";
import Image from "next/image";


export const AdvertiseCard: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
    return (
        <Paper className="w-[281px] relative h-[361px] cursor-pointer" shadow="sm">
            <Image objectFit="contain" alt="advertise" src={imageSrc} layout="fill" />
        </Paper>
    )
}

type Props = {
    carInfo: CarInfo
}
const InfoCard: React.FC<Props> = ({ carInfo }) => {
    return <Paper key={carInfo.name + carInfo.brandName + carInfo.photoURL} className="w-[281px] h-[361px] cursor-pointer" shadow="sm">
        <div className="relative bg-white border-b border-b-solid border-neutral-4 w-full h-[187px]">
            <Image objectFit="contain" alt={`${carInfo.name} photo`} src={carInfo.photoURL} layout="fill" />
        </div>
        <div className="pt-4 px-4 pb-6 font-['Poppins']">
            <div className="mb-2">{carInfo.name}</div>
            <div className="flex gap-2 mb-2 items-center">
                <span className=" text-base leading-6 text-neutral-8 font-normal">
                    {
                        carInfo.totalPrice ?
                            <>From <span className="text-secondary-main">{carInfo.totalPrice}</span></> :
                            <>POA</>
                    }
                </span>
                <span className="rounded-sm bg-secondary-light py-[2px] px-1 text-secondary-main font-normal leading-5">
                    ${carInfo.pricePerMonth}/mo
                </span>
            </div>
            <div className="flex gap-1 mb-4 text-neutral-7 text-sm leading-[22px] font-normal">
                <span>{carInfo.variants}</span> {carInfo.variants === 1 ? "variant" : "variants"}
                {carInfo.withCOE && <span>| with COE</span>}
            </div>

            <div className="flex gap-2 items-center">
                <Image className="rounded-full" alt={`${carInfo.name}'s logo`} width={32} height={32} src={carInfo.brandLogo} />
                <span className="font-normal text-sm leading-[22px] text-neutral-8">{carInfo.brandName}</span>
            </div>
        </div>
    </Paper>
}

export default InfoCard