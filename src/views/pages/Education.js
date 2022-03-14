import React from "react";
import "./Page.css";

function Education() {
    return (
        <section className=" container mt-24 flex-col items-center   ">
            <span className="relative inline-block right-0 justify-end items-end ml-[500px]">
                <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 hidden w-32 -mt-8 -ml-20 text-[#2e2c2c] lg:w-32 lg:-ml-28 lg:-mt-2 sm:block"
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
            <div className="text-center items-center justify-center mb-[-80px] text-[#FFFFFF] ">
                <h1 className="section-title-01">Skills</h1>
                <h2 className="section-title-02">Skills</h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
                <div
                    className=" "
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <div className="bg-[#FF5722] pb-1  w-[30%]">
                        <p className="text-white bg-[#0E0B0C] text-center">
                            Education
                        </p>
                    </div>
                    <ul className="edu-list">
                        <li className="item">
                            <span className="year"> 2017-2021 </span>
                            <p>
                                Lorem ipsum dolor sit amet
                                consecteturadipisicing elit. Optio, delectus.
                            </p>
                        </li>
                        <li className="item">
                            <span className="year"> 2014-2017 </span>
                            <p>
                                Lorem ipsum dolor sit amet
                                consecteturadipisicing elit. Optio, delectus.
                            </p>
                        </li>
                        <li className="item">
                            <span className="year"> 2011-2014 </span>
                            <p>
                                Lorem ipsum dolor sit amet
                                consecteturadipisicing elit. Optio, delectus.
                            </p>
                        </li>
                        <li className="item">
                            <span className="year"> 2011-2014 </span>
                            <p>
                                Lorem ipsum dolor sit amet
                                consecteturadipisicing elit. Optio, delectus.
                            </p>
                        </li>
                    </ul>
                </div>
                <div
                    className=""
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <div className="bg-[#FF5722] pb-1 w-[30%] ">
                        <p className="text-white bg-[#0E0B0C] text-center ">
                            List Skills
                        </p>
                    </div>
                    <div className=" text-[#FFFFFF]">
                        <ul className="bars mt-4">
                            <li className="bar">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>95%</span>
                                </div>
                                <div className="line html"></div>
                            </li>
                        </ul>
                        <ul className="bars">
                            <li className="bar">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>90%</span>
                                </div>
                                <div className="line css"></div>
                            </li>
                        </ul>
                        <ul className="bars">
                            <li className="bar">
                                <div className="info">
                                    <span>PHP</span>
                                    <span>80%</span>
                                </div>
                                <div className="line php"></div>
                            </li>
                        </ul>
                        <ul className="bars">
                            <li className="bar">
                                <div className="info">
                                    <span>java Script</span>
                                    <span>70%</span>
                                </div>
                                <div className="line js"></div>
                            </li>
                        </ul>
                        <ul className="bars">
                            <li className="bar">
                                <div className="info">
                                    <span>Database MySQL</span>
                                    <span>90%</span>
                                </div>
                                <div className="line db"></div>
                            </li>
                        </ul>
                        <ul className="bars">
                            <li className="bar">
                                <div className="info">
                                    <span>Database MySQL</span>
                                    <span>90%</span>
                                </div>
                                <div className="line db"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className=""
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                >
                    <div className="bg-[#FF5722] pb-1 w-[30%] ">
                        <p className="text-white bg-[#0E0B0C] text-center ">
                            Certification
                        </p>
                    </div>
                    <ul className="edu-list">
                        <li className="item">
                            <span className="year">
                                Sertificat Nasional : BNSP
                            </span>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Blanditiis, a?
                            </p>
                        </li>
                        <li className="item">
                            <span className="year">
                                Sertifikat Internasional : CCNA
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Sapiente, quidem?
                            </p>
                        </li>
                        <li className="item">
                            <span className="year">Sertificat Toefl</span>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Accusamus, dicta.
                            </p>
                        </li>
                        <li className="item">
                            <span className="year">
                                Sertifikat PreBootcamp : Javascript
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Similique, saepe.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="text-center container  "
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <h1 className="mt-20 font-bold text-2xl text-[#FFFFFF]  ">
                    Work Experience
                </h1>
                <p className="text-[#C4C4C4] mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, labore sit. Mollitia eveniet id corporis maxime,
                    rerum consequatur blanditiis reiciendis voluptates tenetur.
                    Similique deserunt, quisquam reprehenderit temporibus sunt
                    ratione earum.
                </p>
            </div>
            <div
                className="mt-8 grid sm:grid-cols-1 lg:grid-cols-3 gap-8 text-[#FFFFFF] "
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className="">
                    <div className="experience-card">
                        <div className="upper">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <h5>Lorem ipsum dolor sit amet.</h5>
                            <span>2020-2021</span>
                        </div>
                        <div className="hr"></div>
                        <h4>
                            <label>andaved team</label>
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsa, magnam.
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="experience-card">
                        <div className="upper">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <h5>Lorem ipsum dolor sit amet.</h5>
                            <span>2020-2021</span>
                        </div>
                        <div className="hr"></div>
                        <h4>
                            <label>andaved team</label>
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsa, magnam.
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="experience-card">
                        <div className="upper">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <h5>Lorem ipsum dolor sit amet.</h5>
                            <span>2020-2021</span>
                        </div>
                        <div className="hr"></div>
                        <h4>
                            <label>andaved team</label>
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ipsa, magnam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
