import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaHome,
    FaBloggerB,
    FaRegCreditCard,
    FaSearch,
    FaAlignLeft,
    FaTimes,
} from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import { NavLink } from "react-router-dom";

const routes = [
    {
        path: "/app",
        name: "Home",
        icon: <FaHome />,
    },
    {
        path: "/app",
        name: "Search",
        icon: <FaSearch />,
    },
    {
        path: "/app/blog",
        name: "My Blog",
        icon: <FaBloggerB />,
    },
    {
        path: "/app/portofolio",
        name: "Portofolio",
        icon: <FaRegCreditCard />,
    },
];

function SideBar({ children }) {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => setisOpen(!isOpen);

    const inputAnimate = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };
    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.1,
            },
        },
        show: {
            width: "auto",
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="container m-0 p-0 box-border">
            <motion.div
                animate={{ width: isOpen ? "200px" : "40px" }}
                className=" bg-slate-500 text-black h-[100vh] "
            >
                <div className="flex items-center justify-between px-[10px] py-[10px]">
                    {isOpen && <h1 className=" text-[18px] ">My Dashboard</h1>}
                    <div className="bars">
                        {isOpen ? (
                            <FaAlignLeft onClick={toggle} />
                        ) : (
                            <FaTimes onClick={toggle} />
                        )}
                    </div>
                </div>
                <div className="flex  px-[5px] py-[10px] justify-center items-center">
                    {isOpen ? (
                        <div className="mt-[60px] bg-red-500 w-[150px] h-[150px] rounded-full" />
                    ) : (
                        <div className="mt-[130px] bg-red-500 w-[40px] h-[30px] rounded-full" />
                    )}
                </div>
                <div className="px-[5px]">
                    <div className=" bg-orange-500 w-full h-8 rounded-md   "></div>
                </div>
                
                <section className="mt-8">
                    {routes.map((route) => (
                        <NavLink
                            to={route.path}
                            key={route.name}
                            className="flex items-center gap-[10px] px-[10px] py-[10px] hover:border-r-[4px] hover:bg-red-300 hover:transition-all border-solid border-white "
                        >
                            {isOpen ? (
                                <div className="whitespace-nowrap text-[15px] px-[3px]">
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
                        </NavLink>
                    ))}
                </section>
                {isOpen ? (
                    <div className="px-[5px] mt-[200px]">
                        <div className=" bg-orange-500 w-full h-8 rounded-md text-center flex   ">
                            <BiLogOut className="w-6 ml-1 mt-2 font-extrabold " />
                            <p className=" px-1 py-1">Back To Home</p>
                        </div>
                    </div>
                ) : (
                    <div className="px-[5px] mt-[260px]">
                        <div className=" bg-orange-500 w-full h-8 rounded-md text-center flex   ">
                            <BiLogOut className="w-6 ml-1 mt-2 font-extrabold " />
                        </div>
                    </div>
                )}
            </motion.div>
            <main>{children}</main>
        </div>
    );
}

export default SideBar;
