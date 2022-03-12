import React from "react";
import "./Page.css";
import { ArrowDownIcon } from "@heroicons/react/solid";
import { BsInstagram } from "react-icons/bs";

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
                    <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                        <a
                            href="# "
                            className="mx-2 text-red-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Reddit"
                        >
                            <BsInstagram />
                        </a>

                        <a
                            href="# "
                            className="mx-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Facebook"
                        >
                            <svg
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                            </svg>
                        </a>

                        <a
                            href="# "
                            className="mx-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Github"
                        >
                            <svg
                                className="w-5 h-5 fill-current"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                            </svg>
                        </a>
                    </div>
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                        <span className="">Hi,</span>
                    </span>
                    <h1 className="font-bold text-4xl leading-[60px] text-[#FFFFFF]">
                        I am Agung Dwika, Junior Web Developer
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
                        <button className="primary-button">Get Started</button>
                        <button
                            type="button"
                            className="px-8 py-3 font-semibold rounded dark:bg-coolGray-100 dark:text-coolGray-800"
                        >
                            Basic
                        </button>
                    </div>
                </div>
            </main>
            <a
                href="#about"
                className="container w-full text-center flex justify-center mt-[90px] text-[#FFFFFF] h-6"
            >
                scroll down{" "}
                <ArrowDownIcon className="w-4 justify-center ml-2 items-baseline top-0 animate-bounce" />
            </a>
        </>
    );
}

export default Hero;
