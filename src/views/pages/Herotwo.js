import React from "react";
import { ArrowDownIcon } from "@heroicons/react/solid";

function Herotwo() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg text-[#f4f4f4]">
                    <div className="max-w-xl mb-6 text-[#f4f4f4]">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                            Hi, I am Agung Dwika,
                            <br className="hidden md:block" />
                            <span className=" text-2xl inline-block text-deep-purple-accent-400 mt-4">
                                Junior Web Developer
                            </span>
                        </h2>
                        <p className="text-base text-[#f4f4f4] md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae. explicabo.
                        </p>
                    </div>
                    <div>
                        <button className="third-button">Download Cv</button>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3 ">
                        <div className=" border-2 mb-2 rounded-lg">
                            <img
                                className="object-cover rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 px-2 py-2 "
                                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                        </div>
                        <div className=" border-2 mb-2 rounded-lg">
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 px-2 py-2"
                                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="px-3 border-2 border-[#ffff] rounded-lg">
                        <span className=" text-[#ff5622b7] justify-end items-end right-0 flex text-2xl">
                            .............
                        </span>

                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="./images/agungprofile.jpg"
                            alt=""
                        />
                        <span className=" text-[#ff5622b7] justify-start items-start right-0 flex text-2xl mt-0">
                            .............
                        </span>
                    </div>
                </div>
            </div>
            <a
                href="#about"
                className="container w-full text-center flex justify-center mt-[100px] text-[#FFFFFF] h-6"
            >
                scroll down{" "}
                <ArrowDownIcon className="w-4 justify-center ml-2 items-baseline top-0 animate-bounce" />
            </a>
        </div>
    );
}

export default Herotwo;
