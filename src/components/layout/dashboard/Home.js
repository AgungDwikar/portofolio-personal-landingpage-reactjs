import React from "react";

function Home() {
    return (
        <div className=" w-full h-[72vh] rounded-md bg-opacity-[15%]">
            <section className=" dark:bg-gray-800 pt-4 ">
                <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-2">
                    <div className=" px-6 py-8 mx-auto bg-slate-500 w-[100%] rounded-md shadow-md  ">
                        <div className="rid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-2 ">
                            <div className="items-center lg:flex ">
                                <div className=" bg-red-400 mr-4 rounded-md ">
                                    <h2 className="text-3xl font-semibold leading-none px-2 py-2">
                                        Who I am
                                    </h2>

                                    <p className="mt-4 text-gray-700 lg:max-w-md px-2 py-2">
                                        Hi I am jane , software engineer , Lorem
                                        ipsum, dolor sit amet consectetur
                                        adipisicing elit. Illum in sed non
                                        alias, fugiat, commodi nemo ut fugit
                                        corrupti dolorem sequi ex veniam
                                        consequuntur id, maiores beatae ipsa
                                        omnis aliquam?
                                    </p>

                                   
                                </div>
                                <div className="bg-red-400  rounded-md ">
                                    <h2 className="text-3xl font-semibold leading-none px-2 py-2">
                                        Who I am
                                    </h2>

                                    <p className="mt-4 text-gray-700 lg:max-w-md px-2 py-2">
                                        Hi I am jane , software engineer , Lorem
                                        ipsum, dolor sit amet consectetur
                                        adipisicing elit. Illum in sed non
                                        alias, fugiat, commodi nemo ut fugit
                                        corrupti dolorem sequi ex veniam
                                        consequuntur id, maiores beatae ipsa
                                        omnis aliquam?
                                    </p>

                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" px-6 py-8 mx-auto bg-slate-500 w-[100%] rounded-md shadow-md  ">
                        <div className="items-center lg:flex">
                            <div className=" w-full ">
                                <h2 className="text-3xl font-semibold leading-none">
                                    My Experience
                                </h2>

                                <p className="mt-4 text-gray-700 lg:max-w-md">
                                    <span className=" font-bold">
                                        Intership :
                                    </span>{" "}
                                    Badan Standardsasi Nasional
                                </p>
                                <hr className="mt-2 h-1 border-none bg-gray-800 rounded-full"></hr>
                                <p className="mt-4 text-gray-700 lg:max-w-md">
                                    <span className=" font-bold">
                                        Bootcamp :
                                    </span>{" "}
                                    3+ Bulan di code academi "NodeJs Fullstack"
                                </p>
                                <hr className="mt-2 h-1 border-none bg-gray-800 rounded-full"></hr>
                                <p className="mt-4 text-gray-700 lg:max-w-md">
                                    <span className=" font-bold">
                                        Bootcamp :
                                    </span>{" "}
                                    1+ Bulan di Dumbways "Javascript Vanilla"
                                </p>
                                <hr className="mt-2 h-1 border-none bg-gray-800 rounded-full"></hr>
                                <p className="mt-4 text-gray-700 lg:max-w-md">
                                    <span className=" font-bold">
                                        Bootcamp :
                                    </span>{" "}
                                    1+ Bulan di Jabar Coding Camp "NodeJs"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 dark:bg-coolGray-800 dark:text-coolGray-100">
                    <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-3 ">
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-500 dark:text-coolGray-100 shadow-md ">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-slate-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="h-[160px] w-[160px]  dark:text-coolGray-800"
                                >
                                    <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                    <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                    <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">
                                    Universitas Nasional
                                </p>
                                <p className="capitalize">Teknik Informatika</p>
                                <p className="capitalize">IPK : 3.51</p>
                                <p className="capitalize">
                                    Lulusan : 2017 - 2021
                                </p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-500 dark:text-coolGray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-slate-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="h-[160px] w-[160px]  dark:text-coolGray-800"
                                >
                                    <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                    <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                    <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                    <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">
                                    Jawa Barat
                                </p>
                                <p className="capitalize">
                                    Jl Hj Jidi No 56 rt 01 rw 01
                                </p>
                                <p className="capitalize">Cinere Raya</p>
                                <p className="capitalize">Kota Depok</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-500 dark:text-coolGray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-slate-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className=" h-[160px] w-[160px] dark:text-coolGray-800"
                                >
                                    <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                                    <rect
                                        width="32"
                                        height="32"
                                        x="80"
                                        y="264"
                                    ></rect>
                                    <rect
                                        width="32"
                                        height="32"
                                        x="240"
                                        y="128"
                                    ></rect>
                                    <rect
                                        width="32"
                                        height="32"
                                        x="136"
                                        y="168"
                                    ></rect>
                                    <rect
                                        width="32"
                                        height="32"
                                        x="400"
                                        y="264"
                                    ></rect>
                                    <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none">
                                    Moto Hidup
                                </p>
                                <p className="capitalize">Tetap Belajar</p>
                                <p className="capitalize">Bersabar</p>
                                <p className="capitalize">Rendah Hati</p>
                                <p className="capitalize">Libatkan Allah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
