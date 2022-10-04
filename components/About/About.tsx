import React from "react";

const About: React.FC = () => {
    return <div className="bg-neutral-3 hidden md:block font-['Poppins'] pt-10 pb-10 px-[90px] box-border">
        <h1 className="mb-4 text-neutral-7 text-base font-semibold">UCARS - Revolutionizing The Online Car Marketplace In Singapore</h1>
        <div>
            <h2 className="my-0 text-neutral-7 text-xs leading-6 font-semibold">Buy Used And New Cars Online
            </h2>
            <h3 className="mt-0 mb-9 text-xs leading-5 font-normal">Start your car buying journey with UCARS as we connect you seamlessly to the industry&apos;s best CaseTrust-SVTA accredited car dealerships. As a one stop car online portal you can now buy your new ride, be it a pre-owned car or a brand new car from trusted dealers all over Singapore, all in one place. Our ever expanding listing of quality and covet-worthy cars, new and second hand, from both owners and trusted car dealers, will leave you spoilt for choice. Refine your search by vehicle type, registration year, price, mileage, engine type, transmission, annual depreciation value and more to find the car that best suits your needs, taste and lifestyle. You can even search for your car by dealer or directly by owner.
            </h3>

            <h2 className="my-0 text-neutral-7 text-xs leading-6 font-semibold">Sell Your Car In An Instant With Confidence
            </h2>
            <h3 className="mt-0 mb-9 text-xs leading-5 font-normal">
                We all know how selling a car in Singapore can be a daunting task especially for a first time car seller;
                from trying to get a valuation for your car, finding a trusted dealer, to getting the best quote on your vehicle.
                UCARS understands the hassle and even the costs involved and have as such partnered with Huawei to develop a FIRST in Southeast Asia AI car valuation tool that is able to provide a car&apos;s resale value at the snap of a finger. Backed with a consortium of trusted CaseTrust-SVTA accredited car dealers you can be assured that you are getting the best price for your vehicle and do not have to worry about any hidden costs.
            </h3>

            <h2 className="my-0 text-neutral-7 text-xs leading-6 font-semibold">The Ultimate Car Shopping Experience Online
            </h2>
            <h3 className="mt-0 text-xs leading-5 font-normal">UCARS platform is the first of its kind to be backed by Huawei&apos;s Artificial Intelligence and cloud computing, enabling it to be able to offer users transparency and enhanced security, all with the one aim of enhancing customer experience.
                So come on over to buy and sell used cars online at the best prices at UCARS Singapore. Connect easily with dealers in real-time via our online video call feature, or schedule a test drive when you&apos;re ready. Have some questions? Get them answered instantly with our chatbot moderated by our responsive team. Stay in the loop with our car-related tips, reviews and news. Learn the ins-and-outs of your car, as well as global and Singapore&apos;s car updates at your own pace.
            </h3>
        </div>
    </div>
}

export default React.memo(About)
