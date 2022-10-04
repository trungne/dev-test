import Email from "components/icons/Email";
import Phone from "components/icons/Phone";
import PinDrop from "components/icons/PinDrop";
import Image from "next/image";
import React from "react";
import { isMobile } from "react-device-detect"
import { getCDNImage } from "shared/utils";
import { Divider, Accordion, TextInput } from "@mantine/core"
import styles from './styles.module.css'
import Link from "next/link";
import UnstyledButton from "components/Common/UnstyledButton";
import Instagram from "components/icons/Instagram";
import Facebook from "components/icons/Facebook";
import Mail from "components/icons/Mail";
import Linkedin from "components/icons/Linkedin";
import Youtube from "components/icons/Youtube";
import UCarIcon from "components/icons/UCarIcon";

const MobileAccordion: React.FC = () => {
    return (
        <Accordion classNames={{
            label: "font-bold text-sm leading-[24px]",
            control: 'px-0 py-4'
        }} variant="filled" defaultValue="About">
            <Divider />

            <Accordion.Item value="About">
                <Accordion.Control>About</Accordion.Control>
                <Accordion.Panel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Panel>
            </Accordion.Item>
            <Divider />

            <Accordion.Item value="Services">
                <Accordion.Control>Services</Accordion.Control>
                <Accordion.Panel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Panel>
            </Accordion.Item>

            <Divider />

            <Accordion.Item value="Resources">
                <Accordion.Control>Resources</Accordion.Control>
                <Accordion.Panel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Panel>
            </Accordion.Item>
            <Divider />

            <Accordion.Item value="Legal">
                <Accordion.Control>Legal</Accordion.Control>
                <Accordion.Panel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Panel>
            </Accordion.Item>
            <Divider />
        </Accordion>
    )
}

const ContactInfo: React.FC = () => {
    const [email, setEmail] = React.useState('');

    return <div className="mt-6">
        <div className="flex text-xs leading-5 font-normal mb-2">
            Get the
            <Link href="/">
                <span className=" text-carbuyer-primary">
                    &nbsp;latest&nbsp;
                </span>
            </Link>

            automotive news sent to your inbox!
        </div>
        <div className="flex w-full">
            <TextInput value={email} onChange={(event) => setEmail(event.currentTarget.value)} classNames={{
                root: 'grow',
                wrapper: 'h-full',
                input: 'h-full border-r-0 rounded-none rounded-l'
            }} placeholder="Enter your email" />
            <UnstyledButton className="bg-carbuyer-primary text-white py-2 px-[14px] text-xs leading-6 font-semibold rounded-r">Subscribe</UnstyledButton>
        </div>

        <div className="flex mt-6">
            <span className="text-xs leading-5 font-normal mr-9 md:mr-2">
                Follow us
            </span>
            <div className="flex gap-2 items-center">
                <a className="grid place-content-center" href="https://instagram.com">
                    <Instagram />
                </a>
                <a className="grid place-content-center" href="https://facebook.com">
                    <Facebook />
                </a>
                <a className="grid place-content-center" href="https://gmail.com">
                    <Mail />
                </a>
                <a className="grid place-content-center" href="https://linkedin.com">
                    <Linkedin />
                </a>
                <a className="grid place-content-center" href="https://youtube.com">
                    <Youtube />
                </a>
            </div>
        </div>

        <div className="flex gap-2 mt-6">
            <UCarIcon />
            <div className="text-[10px] leading-5 text-neutral-7 font-normal text-center">
                CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned by UCARS Pte Ltd
            </div>
        </div>


    </div>

}


const Footer: React.FC = () => {
    return <footer className="font-['Poppins']">
        <div className="py-6 px-4">
            <Image
                width={isMobile ? 158 : 300}
                height={isMobile ? 48 : 62}
                layout="fixed"
                alt="footer logo" src={getCDNImage(isMobile ? 'cb_logo_2_mobile.png' : 'cb_logo_2_pc.png')} />
            <div className="mt-4 mb-6 flex flex-col gap-4">
                <div className={styles['container']}>
                    <PinDrop width={14} height={14} /> <div className={styles['info-text']}>71 Ayer Rajah Crescent, #06-14, Singapore 139951</div>
                </div>
                <div className={styles['container']}>
                    <Phone width={14} height={14} /> <div className={styles['info-text']}>+65 8808 7905</div>
                </div>
                <div className={styles['container']}>
                    <Email width={14} height={14} /> <div className={styles['info-text']}>hello@carbuyer.com.sg</div>
                </div>
            </div>

            <MobileAccordion />
            <ContactInfo />
        </div>

        <div className="bg-neutral-8 text-white text-xs leading-5 font-normal py-[14px] text-center">
            © 2022. All rights reserved.
        </div>
    </footer>
}

export default Footer