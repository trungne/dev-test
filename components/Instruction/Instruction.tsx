import BigPinDrop from "components/icons/BigPinDrop";
import React from "react";

const Intrusction: React.FC = () => {
    return (
        <div className="bg-neutral-8 mt-[60px] md:mt-[80px] font-['Poppins'] 
        px-[18px]
        flex flex-col items-center">
            <h1 className="text-[32px] text-carbuyer-primary font-bold leading-[48px] mt-6 mb-2">How it works.</h1>
            <h2 className="text-xl text-white leading-[30px] font-normal mt-0 mb-[42px]">This is how our products works</h2>
            <BigPinDrop />
            <h3 className=" text-white leading-9 text-2xl mt-[46px] mb-3">Find Car</h3>
            <h4 className="m-0 min-h-[124px] text-white text-base font-normal text-center">Our cars are located at prime areas where by there won&apos;t be problem with transportation </h4>
        </div>
    )
}

export default Intrusction