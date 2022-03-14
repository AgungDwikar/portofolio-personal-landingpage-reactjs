import React from "react";
import BenefitItem from "./BenefitItem";
import "./Page.css";
import { DownloadIcon } from "@heroicons/react/solid";

function Benefits() {
    return (
        <section
            className="container mt-21 space-y-24"
            id="about"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <div className="text-center items-center justify-center mb-[-120px] text-[#FFFFFF] ">
                <h1 className="section-title-01">About</h1>
                <h2 className="section-title-02 ">About</h2>
            </div>

            <BenefitItem
                image="/images/dwikar.jpg"
                heading2="Hi, I am Agung Dwika,"
                Content={() => (
                    <div className="text-[#C4C4C4] ">
                        <h5 className="mt-6 mb-2 font-semibold">
                            A lead Junior web developper Based In Jakarta
                        </h5>
                        <span className="relative inline-block right-0 justify-end items-end ml-[500px]">
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
                        <p className=" text-[#777]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Temporibus amet perferendis quis commodi eius
                            architecto nemo possimus officia distinctio ipsa.
                            Ratione soluta laudantium explicabo maiores nulla
                            excepturi tempora distinctio cupiditate?
                        </p>
                        <hr className="mt-4"></hr>
                        <ul className="profesional-list">
                            <li className="list-item">
                                <h3>3+</h3>
                                <span>
                                    Years Of <br />
                                    Experience
                                </span>
                            </li>
                            <li className="list-item">
                                <h3>3+</h3>
                                <span>
                                    Success <br />
                                    Projects
                                </span>
                            </li>
                        </ul>
                        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8 flex-wrap">
                            <button className="third-button flex ">
                                Download Cv
                                <DownloadIcon className="w-6 ml-2" />
                            </button>
                        </div>
                    </div>
                )}
            />
        </section>
    );
}

export default Benefits;
