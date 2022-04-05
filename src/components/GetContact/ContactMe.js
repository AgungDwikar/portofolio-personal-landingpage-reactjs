import React from "react";

function ContactMe() {
    return (
        <>
            <div className="text-center items-center justify-center mb-[-120px] text-white mt-20 ">
                <h1 className="section-title-01">Contact</h1>
                <h2 className="section-title-02 ">Contact</h2>
            </div>
            <section
                className="container text-gray-600 body-font relative mt-10 rounded-lg"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className="container absolute inset-0 rounded-lg z-20 ">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7930.941603970874!2d106.7730662!3d-6.3330005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee576ff0da65%3A0x6da9af7de68339e!2sGg.%20Pulo%2C%20Cinere%2C%20Kec.%20Cinere%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016514!5e0!3m2!1sen!2sid!4v1647623022917!5m2!1sen!2sid"
                    ></iframe>
                </div>
                <div>
                    <span className="relative inline-block right-0 justify-end items-end ml-[50px] z-10 ">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 hidden w-32 -mt-8 -ml-20 text-black lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                </div>
                <div className="container px-5 py-16 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-20 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                            Feedback
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Post-ironic portland shabby chic echo park, banjo
                            fashion axe
                        </p>
                        <div className="relative mb-4">
                            <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="text-white bg-[#D65A31] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled
                            brook viral artisan.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactMe;
