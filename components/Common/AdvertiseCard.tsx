import React from "react";
import { Paper } from '@mantine/core'
import Image from "next/image";


export const AdvertiseCard: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
    return (
        <Paper className="min-w-[281px] w-[281px] relative h-[361px] cursor-pointer" shadow="sm">
            <Image objectFit="contain" alt="advertise" src={imageSrc} layout="fill" />
        </Paper>
    )
}

export default React.memo(AdvertiseCard)