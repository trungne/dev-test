import React from "react";
import Image from "next/image";
import { CDN_HOST } from "shared/constants";
import SearchIcon from "components/icons/SearchIcon";
import { isMobile } from "react-device-detect"

const MOBILE_LOGO_URL = `${CDN_HOST}cb_logo.png`

const BACKGROUND_IMAGE = `${CDN_HOST}background_header_${isMobile ? "mobile" : "pc"}.png`
const Header: React.FC = () => {
    return (
        <div>
            <div className="py-3 px-4 md:hidden flex justify-between items-center">
                <Image
                    width={120}
                    height={40}
                    alt="Car Buyer logo" src={MOBILE_LOGO_URL} />

                <SearchIcon />
            </div>
            <div className="mt-2 relative">
                <div className="absolute px-3 md:px-0 w-full top-0 left-0 z-[-1]">
                    <div className="relative aspect-[343/142]">
                        <Image
                            loading="lazy"
                            layout="fill"
                            objectFit="cover"
                            alt="Back ground Image"
                            src={BACKGROUND_IMAGE}
                            className="rounded md:rounded-none"
                        />
                    </div>
                </div>

                <div className="pt-4 md:pt-[100px] pl-5 md:pl-[108px] text-white font-['Poppins']" >
                    <div className="font-semibold text-lg md:text-[60px] md:leading-[76px]">Car Marketplace</div>
                    <div className="font-medium  w-[50%] 
                    mt-1 md:mt-4
                    text-[6px] md:text-[18px] 
                    text-gray-400">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div>
                            Nunc odio in et, lectus sit lorem id integer.
                        </div>
                    </div>

                    <button className="bg-[#EE1B24] font-['Poppins'] font-semibold text-white 
                    text-[10px] md:text-[18px] 
                    py-[6px] md:py-3
                    px-4 md:px-12
                    mt-3 border-0 rounded">
                        Get Started
                    </button>
                </div>

            </div>
        </div>

    )
}

export default React.memo(Header)