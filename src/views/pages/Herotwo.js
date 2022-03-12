import React from "react";
import { ArrowDownIcon } from "@heroicons/react/solid";
import { BsInstagram, BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

function Herotwo() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg text-[#f4f4f4]">
                    <div className="flex justify-center mb-4 z-10 absolute lg:flex lg:mt-8 lg:-mx-2 flex-col w-7 h-auto gap-8">
                        <a
                            href="# "
                            className="mx-2 text-[#FF5722] h-9 mt-5 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Reddit"
                        >
                            <BsInstagram />
                        </a>
                        <a
                            href="# "
                            className="mx-2 text-[#FF5722] h-9 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Reddit"
                        >
                            <BsGithub />
                        </a>

                        <a
                            href="# "
                            className="mx-2 text-[#FF5722] h-9 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Facebook"
                        >
                            <BsLinkedin />
                        </a>
                        <a
                            href="# "
                            className="mx-2 text-[#FF5722] h-9 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Facebook"
                        >
                            <BsFacebook />
                        </a>
                    </div>
                    <div className="max-w-xl mb-6 text-[#f4f4f4] ml-4">
                        <span className="relative inline-block ml-8">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 hidden w-32 -mt-8 -ml-20 text-[#2e2c2c] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                        </span>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none ml-8">
                            Hi, I am Agung Dwika,
                            <br className="hidden md:block" />
                            <span className=" text-2xl inline-block text-deep-purple-accent-400 mt-4">
                                Junior Web Developer
                            </span>
                        </h2>
                        <p className="text-base text-[#f4f4f4] md:text-lg ml-8">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae. explicabo.
                        </p>
                    </div>
                    <div className="ml-12 flex items-baseline">
                        <Link to="/app">
                            <button className="third-button flex  ">
                                Dashboard
                                <FiLogIn className="w-6 ml-1 mt-1 " />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3 ">
                        <div className=" border-2 mb-2 rounded-lg">
                            <img
                                className="object-cover rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 px-2 py-2 "
                                src="./images/agung33.jpg"
                                alt=""
                            />
                        </div>
                        <div className=" border-2 mb-2 rounded-lg">
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 px-2 py-2"
                                src="./images/agung22.jpg"
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
            <Scroll
                to="about"
                delay={200}
                duration={1000}
                py={true}
                smooth={true}
                className="container w-full text-center flex justify-center mt-[100px] text-[#FFFFFF] h-6 cursor-pointer"
            >
                scroll down{" "}
                <ArrowDownIcon className="w-4 justify-center ml-2 items-baseline top-0 animate-bounce" />
            </Scroll>
        </div>
    );
}

export default Herotwo;
