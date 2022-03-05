import React from "react";

function Contact() {
    return (
        <div className=" container mt-28 flex-col items-center   ">
            <div className="text-center items-center justify-center mb-[-80px] text-[#FFFFFF] ">
                <h1 className="section-title-01">Contact</h1>
                <h2 className="section-title-02">Contact</h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className=" rounded-lg w-[90%]">
                    <img
                        src="./images/Feedback-bro.png"
                        alt="hero"
                        className=" rounded-lg hero-pattern bg-gray-400  "
                    />
                </div>
                <div className="p-6 text-[#FFFFFF]">
                    <form>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="first-name">First name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    className="form-input px-3 py-2 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="last-name">Last name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    className="form-input px-3 py-2 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input px-3 py-2 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phone">
                                    <div className="flex align-items">
                                        Phone
                                        <span className="ml-auto opacity-75">
                                            Optional
                                        </span>
                                    </div>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input px-3 py-2 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col col-span-2">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input px-3 py-2 rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex flex-col col-span-2">
                                <label htmlFor="subject">
                                    <div className="flex align-items">
                                        Message
                                        <span className="ml-auto opacity-75">
                                            Max. 500 characters
                                        </span>
                                    </div>
                                </label>
                                <textarea
                                    maxLength="500"
                                    rows="4"
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input px-3 py-2 rounded-md"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-end py-4">
                            <button type="submit" className="primary-button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
