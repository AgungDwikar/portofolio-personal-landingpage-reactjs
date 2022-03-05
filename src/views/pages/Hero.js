import React from "react";
import "./Page.css";
import { ArrowDownIcon } from "@heroicons/react/solid";

function Hero() {
    return (
        <>
            <main
                className="container md:flex flex-row-reverse justify-between items-center "
                id="hero"
            >
                <div className="md:max-w-[40%] mb-4   ">
                    <img
                        src="./images/agungedit.jpg"
                        alt="hero"
                        className=" rounded-b-full hero-pattern bg-gray-400  "
                    />
                </div>

                {/* text section */}
                <div className="text-center sm:text-left md:max-w-[40%] text-[#C4C4C4]">
                    <h1 className="font-bold text-4xl leading-[60px] text-[#FFFFFF]">
                        Hi, I am Agung Dwika, Junior Web Developer
                    </h1>
                    <h3 className="mt-4 font-semibold">
                        Bachelor of Computer Science
                    </h3>
                    <p className="mt-4 text-[18px] leading-[28px] font-normal text-[#777]">
                        CODE.ID is a software development service company that
                        focuses on helping clients turn their best ideas into a
                        product, application, or website. We also provide IP
                        Products, including Activo for Fixed Asset Management
                        and Klaim for Claim System Management.
                    </p>
                    <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8 flex-wrap">
                        <button className="primary-button">
                            Get Started
                        </button>
                        <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-coolGray-100 dark:text-coolGray-800">Basic</button>
                    </div>
                </div>
            </main>
            <a
                href="#about"
                className="container w-full text-center flex justify-center mt-[90px] text-[#FFFFFF] h-6"
            >
                scroll down <ArrowDownIcon className="w-4 justify-center ml-2 items-baseline top-0 animate-bounce" />
                
            </a>
        </>
    );
}

export default Hero;
