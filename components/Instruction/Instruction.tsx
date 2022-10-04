import BigPinDrop from "components/icons/BigPinDrop";
import Image from "next/image";
import React from "react";
import { getCDNImage } from "shared/utils";
import styles from './styles.module.css'
import cx from 'classnames'

const Intrusction: React.FC = () => {

    return (
        <div className="bg-neutral-8 mt-[60px] md:mt-[80px] font-['Poppins'] 
        px-[20px]
        flex flex-col items-center

        min-h-[810px]
        ">
            <h1 className="
            text-[32px] md:text-[48px] 
            leading-[48px] md:leading-[72px] 
            text-carbuyer-primary font-bold  mt-6 mb-2">How it works.</h1>
            <h2 className="
            text-xl md:text-[32px]
            leading-[30px] md:leading-[48px]
             text-white  font-normal mt-0 mb-[42px] md:mb-[142px]">This is how our products works</h2>
            <div className="grid place-items-center grid-cols-1 max-w-[480px]
            w-full
            md:max-w-full md:grid-cols-3 
            md:gap-x-12
            ">
                <div className={styles.container}>
                    <BigPinDrop />
                    <h3 className={cx(styles.h3, "mt-[46px] mb-3")}>Find Car</h3>
                    <h4 className={cx(styles.h4, "mt-0 mb-12")}>
                        Our cars are located at prime areas where by there won&apos;t be problem with transportation
                    </h4>
                </div>

                <div className={styles.container}>
                    <Image loading="lazy" height={140} width={184} layout="fixed" alt="payment" src={getCDNImage('payment.png')} />
                    <h3 className={cx(styles.h3, "mt-[52px] mb-3")}>Make payments</h3>
                    <h4 className={cx(styles.h4, "mt-0 mb-[18px]")}>
                        Our estates comes with good network, portable water, 24hrs light and round the clock security.
                    </h4>
                </div>

                <div className={styles.container}>
                    <Image loading="lazy" height={132} width={141} layout="fixed" alt="payment" src={getCDNImage('lock.png')} />
                    <h3 className={cx(styles.h3, "mt-[52px] mb-3")}>Make it Official</h3>
                    <h4 className={cx(styles.h4, "mt-0 mb-[18px]")}>
                        We have been in business for over 32 years, for client outside the country you can trust  us to deliver well.
                    </h4>
                </div>
            </div>

        </div >
    )
}

export default React.memo(Intrusction)