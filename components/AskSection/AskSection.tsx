import React from "react";
import { isMobile } from "react-device-detect"
import Image from "next/image";
import { getCDNImage } from "shared/utils";
import UnstyledButton from "components/Common/UnstyledButton";
import Link from "next/link";
const AskSection: React.FC = () => {
    return (
        <div className="relative 
         font-['Poppins'] mt-[132px] min-h-[694px] px-6 md:px-20">
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                <Image objectFit="cover" layout="fill" alt="background" src={getCDNImage(isMobile ? 'background_2_mobile.png' : 'background_2_pc.png')} />
            </div>
            <div className="max-w-full w-full md:max-w-[410px] pt-[80px] grid justify-items-center md:justify-items-start">
                <h1 className="mt-0 mb-[186px] md:mb-[18px] max-w-[288px] whitespace-pre 
        text-[48px] md:text-[76px]
        leading-[72px] md:leading-[114px]
        font-semibold
        text-white">
                    Questions {"\n"}
                    about {"\n"}
                    buying or {"\n"}
                    renting?</h1>

                <UnstyledButton className="bg-carbuyer-primary w-full mb-[80px] py-[20.5px] text-white text-base rounded-md">
                    <Link href="/">
                        Ask Us
                    </Link>
                </UnstyledButton>
            </div>

        </div>
    )
}

export default React.memo(AskSection)