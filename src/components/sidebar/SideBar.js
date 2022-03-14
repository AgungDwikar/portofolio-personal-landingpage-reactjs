import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import {
    FaHome,
    FaBloggerB,
    FaRegCreditCard,
    FaIdCard,
    FaAlignLeft,
    FaTimes,
    FaLayerGroup,
} from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import { data } from "autoprefixer";

const routes = [
    {
        path: "/dashboard/home",
        name: "Home",
        icon: <FaHome />,
        current: true,
    },
    {
        path: "/dashboard/blog",
        name: "My Blog",
        icon: <FaBloggerB />,
        current: false,
    },
    {
        path: "/dashboard/portofolio",
        name: "Portofolio",
        icon: <FaRegCreditCard />,
        current: false,
    },
    {
        path: "/dashboard/kontak",
        name: "Kontak",
        icon: <FaIdCard />,
        current: false,
    },
    {
        path: "/dashboard/komponentui",
        name: "komponent ui",
        icon: <FaLayerGroup />,
        current: false,
    },
];

const timeSelection = () => {
    const jam = new Date().getHours();
    const menit = new Date().getMinutes();

    let sayHello;

    if (jam <= 11 && menit <= 59) {
        sayHello = `Selamat pagi, `;
    } else if (jam <= 15 && menit <= 59) {
        sayHello = `Selamat siang,`;
    } else if (jam <= 17 && menit <= 59) {
        sayHello = `Selamat sore,`;
    } else {
        sayHello = `Selamat malam, `;
    }

    return sayHello;
};
const kataSelection = () => {
    const jam = new Date().getHours();
    const menit = new Date().getMinutes();

    let sayKata;

    if (jam <= 11 && menit <= 59) {
        sayKata = `Jangan lupa minum air putih cukup, dan sholat dhuha`;
    } else if (jam <= 15 && menit <= 59) {
        sayKata = `Jangan lupa sholat dzuhur, dan makan siang`;
    } else if (jam <= 17 && menit <= 59) {
        sayKata = `Jangan lupa sholat ashar, dan mandi`;
    } else {
        sayKata = `Jangan lupa sholat maghrib dan isya, dan selamat beristirahat`;
    }

    return sayKata;
};
const getDayNow = () => {
    let tanggalLengkap = new String();
    let harian = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
    harian = harian.split(" ");
    var namabulan =
        "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember";
    namabulan = namabulan.split(" ");
    const hari = new Date().getDay();
    const tanggal = new Date().getDate();
    const Bulan = new Date().getMonth();
    const Tahun = new Date().getFullYear();

    tanggalLengkap =
        harian[hari] + ", " + tanggal + " " + namabulan[Bulan] + " " + Tahun;
    return tanggalLengkap;
};

function SideBar() {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => setisOpen(!isOpen);

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.1,
            },
        },
        show: {
            show: 1,
            width: "auto",
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=-6.33609&lon=106.788342&appid=d7d4e7eec1f425d3d64c298c5439e07e`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            });
            setLocation("");
        }
    };
    return (
        <div className=" m-0 p-0 box-border flex">
            <motion.div
                animate={{ width: isOpen ? "200px" : "40px" }}
                className=" bg-[#0E0B0C] text-[#ffffff] h-[100vh] "
            >
                <div className="flex items-center justify-between px-[10px] py-[10px]">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.h1
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="logo"
                            >
                                DoSomeCoding
                            </motion.h1>
                        )}
                        <div className="bars">
                            {isOpen ? (
                                <FaAlignLeft
                                    onClick={toggle}
                                    className=" cursor-pointer"
                                />
                            ) : (
                                <FaTimes
                                    onClick={toggle}
                                    className=" cursor-pointer"
                                />
                            )}
                        </div>
                    </AnimatePresence>
                </div>
                <div className="flex  px-[5px] py-[10px] justify-center items-center">
                    {isOpen ? (
                        <div className="mt-[50px] bg-red-500 w-[150px] h-[150px] rounded-full" />
                    ) : (
                        <div className="mt-[185px] bg-red-500 w-[40px] h-[30px] rounded-full" />
                    )}
                </div>
                <div className="flex items-center gap-[10px] px-[10px] py-[10px] ">
                    <AnimatePresence>
                        {isOpen ? (
                            <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className=" whitespace-nowrap text-[15px]"
                            >
                                <p className="py-1 px-2">
                                    Agung Dwika Rudiyanto
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className=" whitespace-nowrap text-[15px] px-[3px] py-1"
                            >
                                <FaBloggerB className="" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <section className="mt-6">
                    {routes.map((route, index) => (
                        <Link
                            to={route.path}
                            key={index}
                            className="flex items-center gap-[10px] px-[10px] py-[10px] hover:border-r-[4px] hover:bg-red-300 hover:transition-all border-solid border-white focus:bg-slate-600 focus:text-white "
                        >
                            {isOpen ? (
                                <div className="whitespace-nowrap text-[15px] px-[3px] py-1">
                                    {route.icon}
                                </div>
                            ) : (
                                <div className="whitespace-nowrap text-[15px] px-[3px] py-1">
                                    {route.icon}
                                </div>
                            )}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={showAnimation}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className=" whitespace-nowrap text-[15px]"
                                    >
                                        {route.name}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Link>
                    ))}
                </section>
                <Link to="/">
                    {isOpen === true ? (
                        <div className="px-[5px] mt-[160px]">
                            <div className=" bg-[#141313] w-full h-8 rounded-md text-center flex   ">
                                <BiLogOut className="w-6 ml-1 mt-2 font-extrabold " />
                                <p className=" px-1 py-1">Back To Home</p>
                            </div>
                        </div>
                    ) : (
                        <div className="px-[5px] mt-[160px]">
                            <div className=" bg-[#141313] w-full h-8 rounded-md text-center flex   ">
                                <BiLogOut className="w-6 ml-1 mt-2 font-extrabold " />
                            </div>
                        </div>
                    )}
                </Link>
            </motion.div>

            <main className=" px-4 py-4 w-full">
                <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
                    <div
                        className="
                    w-full
                    bg-[#34D399] bg-opacity-[15%]
                    px-7
                    py-8
                    md:p-9
                    rounded-lg
                    shadow-md
                    flex
                    border-l-[6px] border-[#34D399]
                    "
                    >
                        <div className="w-full ">
                            <h5 className="text-lg font-semibold mb-1 text-dark">
                                {timeSelection()}
                            </h5>
                            <p className="text-base text-body-color leading-relaxed">
                                {kataSelection()}
                            </p>
                        </div>
                    </div>

                    <div
                        className="
                    w-full
                    bg-[#34D399] bg-opacity-[15%]
                    px-7
                    py-8
                    md:p-9
                    rounded-lg
                    shadow-md
                    flex
                  
                    "
                    >
                        <div className="w-full">
                            <h5 className="text-lg font-semibold mb-1 text-dark">
                                {getDayNow()}
                            </h5>
                            <p className="text-base text-body-color leading-relaxed">
                                {kataSelection()}
                            </p>
                        </div>
                    </div>
                    <div
                        className="
                    w-full
                    bg-[#34D399] bg-opacity-[15%]
                    px-7
                    py-8
                    md:p-9
                    rounded-lg
                    shadow-md
                    flex
                   
                    "
                    >
                        <div className="w-full">
                            <div>
                                <label>Input Location : </label>
                                <input
                                    value={location}
                                    onChange={(event) =>
                                        setLocation(event.target.value)
                                    }
                                    onKeyPress={searchLocation}
                                    placeholder="search location..."
                                    type="text"
                                    className=" rounded-md"
                                />
                            </div>
                            <h5 className="text-lg font-semibold mb-1 text-dark">
                                {data.name}
                            </h5>
                            {data.main ? (
                                <p className="text-base text-body-color leading-relaxed">
                                    {data.main.temp}
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
                <Outlet />
            </main>
        </div>
    );
}

export default SideBar;
