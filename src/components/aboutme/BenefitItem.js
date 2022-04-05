import React from "react";
import "./Pagess.css";

function BenefitItem({ image, heading1, heading2, description, Content }) {
    return (
        <>
            <div className="md:flex flex-row even:flex-row justify-between items-center text-[#34364a]   ">
                <div className="md:max-w-[45%] rounded-lg  ">
                    <img
                        src={image}
                        alt={heading2}
                        className=" rounded-lg px-2 py-2  "
                    />
                </div>

                <div className="text-left md:max-w-[40%] mt-4 md:mt-0">
                    <p className="font-semibold text-base  ">{heading1}</p>
                    <h1 className="font-bold text-4xl leading-[60px] text-white">
                        {heading2}
                    </h1>
                    <p className="my-4">{description}</p>
                    <Content />
                </div>
            </div>
        </>
    );
}

export default BenefitItem;
