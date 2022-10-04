import Email from "components/icons/Email";
import Phone from "components/icons/Phone";
import PinDrop from "components/icons/PinDrop";
import Image from "next/image";
import React from "react";
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
import cx from "classnames"

const MobileAccordion: React.FC = () => {
    return (
        <div className="md:hidden">
            <Accordion classNames={{
                label: "font-bold text-sm leading-[24px]",
                control: 'px-0 py-4',
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
        </div>

    )
}

const ContactInfo: React.FC = () => {
    const [email, setEmail] = React.useState<string>();

    const subscribe = React.useCallback(() => {
        if (!email) {
            console.error('No value for email!')
            return
        }

        console.log('email submitted: ' + email)
    }, [email])

    return (
        <div className="mt-6 md:mt-0 min-w-0 md:mx-auto basis-auto">
            <div className="flex flex-wrap text-xs md:text-sm leading-5 font-normal mb-2 whitespace-nowrap">
                <span className="text-neutral-8 font-normal">
                    Get the
                </span>
                <Link href="/">
                    <span className="inline-block text-carbuyer-primary cursor-pointer">
                        &nbsp;latest&nbsp;
                    </span>
                </Link>
                <span className="text-neutral-8 font-normal">
                    automotive news sent&nbsp;
                </span>
                <span className="text-neutral-8 font-normal">
                    to your inbox!
                </span>
            </div>
            <div className="flex w-full">
                <TextInput
                    onSubmit={subscribe}
                    aria-label="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)} classNames={{
                        root: 'flex-1',
                        wrapper: 'h-full',
                        input: 'h-full border-r-0 rounded-none rounded-l'
                    }} placeholder="Enter your email" />
                <UnstyledButton onClick={subscribe} className="bg-carbuyer-primary text-white py-2 px-[14px] text-xs leading-6 font-semibold rounded-r">Subscribe</UnstyledButton>
            </div>

            <div className="flex mt-6 md:mt-4">
                <span className="text-xs md:text-sm md:leading-[22px] leading-5 font-normal mr-9 md:mr-2">
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
        </div>
    )

}

const Address: React.FC = () => {
    return (
        <div>
            <div className="relative w-[158px] h-[48px] md:hidden">
                <Image
                    loading="lazy"
                    layout="fill"
                    alt="footer logo" src={getCDNImage('cb_logo_2_mobile.png')} />
            </div>

            <div className="relative w-[300px] h-[62px] hidden md:block">
                <Image
                    loading="lazy"
                    layout="fill"
                    alt="footer logo" src={getCDNImage('cb_logo_2_pc.png')} />
            </div>

            <div className="mt-4 mb-6 flex flex-col gap-4 
                md:gap-2">
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
        </div>
    )
}

const PCLinks: React.FC = () => {
    return (
        <div className="hidden md:flex md:gap-4 lg:gap-8 md:mx-4 lg:mx-8 md:whitespace-nowrap md:flex-1 md:justify-around">
            <div>
                <h2 className={cx(styles.h2)}>About</h2>
                <div className={cx(styles['container-pc'])}>
                    <Link href="/"><span className={cx(styles.h3)}>About Us</span></Link>
                    <Link href="/"><span className={cx(styles.h3)}>Contact Us</span></Link>
                    <Link href="/"><span className={cx(styles.h3)}>Careers</span></Link>
                </div>
            </div>

            <div>
                <h2 className={cx(styles.h2)}>Services</h2>
                <div className={cx(styles['container-pc'])}>
                    <Link href="/"><span className={cx(styles.h3)}>Buy Used Cars</span></Link>
                    <Link href="/"><span className={cx(styles.h3)}>Buy New Cars</span></Link>
                    <Link href="/"><span className={cx(styles.h3, "whitespace-normal")}>Be a Dealer with UCARS</span></Link>
                </div>
            </div>

            <div>
                <h2 className={cx(styles.h2)}>Resources</h2>
                <div className={cx(styles['container-pc'])}>
                    <Link href="/"><span className={cx(styles.h3)}>News</span></Link>
                    <Link href="/"><span className={cx(styles.h3)}>Sell My Car</span></Link>
                    <Link href="/"><span className={cx(styles.h3)}>COE Prices</span></Link>
                </div>
            </div>

        </div>
    )
}

const PCTermsAndConditions: React.FC = () => {
    return (
        <div className="hidden md:flex md:gap-1 md:mb-[18px] w-full">
            <Link href="/">
                <span className="text-sm leading-[22px] text-neutral-8 font-normal cursor-pointer">Advertising Terms and Conditions</span>
            </Link>
            <Link href="/">
                <span className="text-sm leading-[22px] text-neutral-8 font-normal cursor-pointer">Platform Terms and Conditions</span>
            </Link>
            <Link href="/">
                <span className="text-sm leading-[22px] text-neutral-8 font-normal cursor-pointer">Privacy Policy</span>
            </Link>

            <span className="text-neutral-6 text-sm leading-[22px] font-normal ml-auto">© 2022. All rights reserved.</span>
        </div>
    )
}

const Icon: React.FC = () => {
    return (
        <div className="flex gap-2 mb-6 items-center md:mb-10">
            <UCarIcon width={58.65} height={16} />
            <div className="text-[10px] leading-5 text-neutral-7 font-normal text-center">
                CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned by UCARS Pte Ltd
            </div>
        </div>
    )
}

const MobileDisclaimer: React.FC = () => {
    return (
        <div className="bg-neutral-8 mx-[-16px] text-white text-xs leading-5 font-normal py-[14px] text-center md:hidden">
            © 2022. All rights reserved.
        </div>
    )
}


const Footer: React.FC = () => {
    return (
        <footer className="font-['Poppins'] px-4 
    grid md:justify-items-center
    md:px-12 lg:px-18 xl:px-28">
            <div className="md:max-w-[1330px]">
                <div className="py-6 md:flex  md:pt-[52px] md:pb-12 md:flex-wrap">
                    <Address />
                    <PCLinks />
                    <MobileAccordion />
                    <ContactInfo />
                </div>

                <PCTermsAndConditions />
                <Icon />
            </div>

            <MobileDisclaimer />
        </footer>)
}

export default React.memo(Footer)