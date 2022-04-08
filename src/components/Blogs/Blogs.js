import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import "./Blogs.css";

function Blogs() {
    return (
        <section
            className="pt-20 lg:pt-[120px] pb-10 lg:pb-20"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <div className="text-center items-center justify-center mb-[-220px] text-white ">
                <h1 className="section-title-01">Blogs</h1>
                <h2 className="section-title-02 ">Blogs</h2>
            </div>
            <div className="container mt-20">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <p className="text-base text-body-color text-white">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                                    alt="images"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <span
                                    className="
                                    bg-primary
                                    rounded
                                    inline-block
                                    text-center
                                    py-1
                                    px-4
                                    text-xs
                                    leading-loose
                                    font-semibold
                                    text-white
                                    mb-5
                                    bg-[#D65A31]
                                    "
                                >
                                    Dec 22, 2023
                                </span>
                                <h3>
                                    <a
                                        href="# "
                                        className="
                                        font-semibold
                                        text-xl
                                        sm:text-2xl
                                        lg:text-xl
                                        xl:text-2xl
                                        mb-4
                                        inline-block
                                        text-dark
                                        hover:text-primary
                                        text-white
                                        "
                                    >
                                        Meet AutoManage, the best AI management
                                        tools
                                    </a>
                                </h3>
                                <p className="text-base text-body-color text-white">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                                    alt="images"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <span
                                    className="
                                    bg-primary
                                    rounded
                                    inline-block
                                    text-center
                                    py-1
                                    px-4
                                    text-xs
                                    leading-loose
                                    font-semibold
                                    text-white
                                    mb-5
                                    bg-[#D65A31]
                                    "
                                >
                                    Mar 15, 2023
                                </span>
                                <h3>
                                    <a
                                        href="# "
                                        className="
                                        font-semibold
                                        text-xl
                                        sm:text-2xl
                                        lg:text-xl
                                        xl:text-2xl
                                        mb-4
                                        inline-block
                                        text-dark
                                        hover:text-primary
                                        text-white
                                        "
                                    >
                                        How to earn more money as a wellness
                                        coach
                                    </a>
                                </h3>
                                <p className="text-base text-body-color text-white">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                                    alt="images"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <span
                                    className="
                                    bg-primary
                                    rounded
                                    inline-block
                                    text-center
                                    py-1
                                    px-4
                                    text-xs
                                    leading-loose
                                    font-semibold
                                    text-white
                                    mb-5
                                    bg-[#D65A31]
                                    "
                                >
                                    Jan 05, 2023
                                </span>
                                <h3>
                                    <a
                                        href="# "
                                        className="
                                        font-semibold
                                        text-xl
                                        sm:text-2xl
                                        lg:text-xl
                                        xl:text-2xl
                                        mb-4
                                        inline-block
                                        text-dark
                                        hover:text-primary
                                        text-white
                                        "
                                    >
                                        The no-fuss guide to upselling and cross
                                        selling
                                    </a>
                                </h3>
                                <p className="text-base text-body-color text-white">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="viewalls sm:justify-center items-center">
                <Link to="/projects">
                    <button
                        className=" bg-[#de643c] p-4 text-white"
                        data-aos="fade-right"
                    >
                        View All
                        <HiArrowRight className=" bg-slate-900 text-white w-8 h-8 rounded-full" />
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Blogs;
