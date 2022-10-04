import React from "react";
import Image from "next/image";
import SearchIcon from "components/icons/SearchIcon";
import UCarIcon from "components/icons/UCarIcon";
import UnstyledButton from "components/Common/UnstyledButton";
import Phone from "components/icons/Phone";
import { Divider } from '@mantine/core'
import PinDrop from "components/icons/PinDrop";
import Email from "components/icons/Email";
import Link from "next/link";
import { getCDNImage } from "shared/utils";

const Address: React.FC = React.memo(() => {
    return <div className="flex justify-between px-[60px] py-4">
        <div className="flex gap-6">
            <div className="flex whitespace-pre-line my-1">
                <PinDrop />
                <div className="ml-2 text-xs">
                    71 Ayer Rajah Crescent, #06-14,
                    {'\n'}
                    Singapore 139951
                </div>
            </div>
            <Divider orientation="vertical" />
            <div className="flex my-1">
                <Email />
                <div className="ml-2 text-xs">
                    <div>
                        Email us at:
                    </div>
                    <div>
                        hello@carbuyer.com.sg
                    </div>
                </div>

            </div>
        </div>

        <div className="flex">
            <Phone />
            <div className="ml-2">
                <div className="text-sm font-semibold">
                    +65 8808 7905
                </div>
                <div className="text-sm font-semibold">
                    +7 (700) 51 51 518
                </div>
            </div>
        </div>
    </div>
})
Address.displayName = 'Address'

const Menu: React.FC = React.memo(() => {
    return (
        <div className="flex bg-neutral py-5 justify-around">
            <UCarIcon />
            <nav className="flex items-center gap-12">
                <Link href={'/new'} passHref>
                    <a className="bg-transparent text-base text-white cursor-pointer">New Cars</a>
                </Link>
                <Link href={'/used'} passHref>
                    <a className="bg-transparent text-base text-white cursor-pointer">Used Cars</a>
                </Link>
                <Link href={'/review'} passHref>
                    <a className="bg-transparent text-base text-white cursor-pointer">Review Cars</a>
                </Link>
                <Link href={'/news'} passHref>
                    <a className="bg-transparent text-base text-white cursor-pointer">News</a>
                </Link>
            </nav>

            <UnstyledButton className="bg-carbuyer-primary font-semibold text-white 
                    text-base leading-5 py-3 px-16 rounded">
                Login
            </UnstyledButton>
        </div>
    )
})
Menu.displayName = 'Menu'

const PCHeader: React.FC = React.memo(() => {
    return (
        <header className="hidden md:block">
            <Address />
            <Menu />
        </header>
    )
})
PCHeader.displayName = 'PCHeader'

const MobileHeader: React.FC = React.memo(() => {
    return (
        <header className="py-3 px-4 md:hidden flex justify-between items-center">
            <Image
                width={120}
                height={40}
                alt="Car Buyer logo" src={getCDNImage('cb_logo.png')} />

            <SearchIcon />
        </header>
    )
})

MobileHeader.displayName = 'MobileHeader'

const Header: React.FC = () => {
    return (
        <div>
            <MobileHeader />
            <PCHeader />
            <div style={{
                backgroundImage: `url(${getCDNImage('background_header_pc.png')})`
            }} className="mt-2 md:mt-0 
            relative 
            mx-3 md:mx-0
            bg-cover bg-center
            aspect-[343/142] lg:aspect-[1366/529]
            rounded md:rounded-none">

                <div className="pt-4 md:pt-[100px] pl-5 md:pl-[108px] text-white font-['Poppins']" >
                    <div className="font-semibold text-lg lg:text-[60px] lg:leading-[76px]">Car Marketplace</div>
                    <div className="font-medium w-[50%] 
                    mt-1 md:mt-4
                    text-[6px] sm:text-sm lg:text-[18px] 
                    text-neutral-4">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div>
                            Nunc odio in et, lectus sit lorem id integer.
                        </div>
                    </div>

                    <UnstyledButton className="bg-carbuyer-primary font-['Poppins'] font-semibold text-white 
                    text-[10px] sm:text-sm md:text-[18px] 
                    py-[6px] lg:py-3
                    px-4 md:px-12
                    mt-3 border-0 rounded">
                        Get Started
                    </UnstyledButton>
                </div>

            </div>
        </div>
    )
}

export default React.memo(Header)