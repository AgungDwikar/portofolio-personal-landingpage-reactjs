import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

import "./Landing.css";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaFacebook,
    FaBlogger,
} from "react-icons/fa";

function Landing() {
    return (
        <div className="landing">
            <div className="landing--container">
                <div className="landing--container-left bg-[#D65A31]">
                    <div className="lcl--content">
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin
                                    className="landing--social text-[#eaeaea]"
                                    aria-label="LinkedIn"
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub
                                    className="landing--social text-[#eaeaea]"
                                    aria-label="GitHub"
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter
                                    className="landing--social text-[#eaeaea]"
                                    aria-label="Twitter"
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaBlogger
                                    className="landing--social text-[#eaeaea]"
                                    aria-label="Blogger"
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook
                                    className="landing--social text-[#eaeaea]"
                                    aria-label="Blogger"
                                />
                            </a>
                        )}
                    </div>
                    <div className="card2 z-30 lg:block sm:hidden  ">
                        <div className=" h-6 w-6 ml-2 mt-2 rounded-full bg-[#de3f20] absolute animate-pulse">

                        </div>
                        <h1 className=" justify-center items-center text-center flex px-2 py-5 z-50 relative text-gray-900 text-lg font-semibold">
                            Never Give Up
                        </h1>
                    </div>
                </div>

                <img
                    src={headerData.image}
                    alt=""
                    className="landing--img border-r-teal-400"
                />
                {/* <div className="card  ">
                    <h1 className=" justify-center items-center text-center flex px-2 py-5  z-50 relative text-gray-900 text-lg font-semibold">
                        keep learning
                    </h1>
                </div> */}
                <div className="landing--container-right bg-[#222831] ">
                    <div className="lcr--content text-white">
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className="lcr-buttonContainer  ">
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download="resume"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className=" bg-[#D65A31] p-4 border-2 border-none rounded-md text-white  ">
                                        Download CV
                                    </span>
                                </a>
                            )}
                            <NavLink
                                to="/#contacts"
                                smooth={true}
                                spy="true"
                                duration={2000}
                            >
                                <span className=" p-3 border-2 border-[#D65A31] lg:block rounded-md sm:hidden ">
                                    My Handbook
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
