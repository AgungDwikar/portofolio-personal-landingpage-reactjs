import React from "react";

function Experience() {
    return (
        <section class="text-gray-600 body-font mt-28">
            <div className="text-center items-center justify-center mb-[-220px] text-white ">
                <h1 className="section-title-01">Experience</h1>
                <h2 className="section-title-02 ">Experience</h2>
            </div>
            <div class="container px-5 py-24 mx-auto flex flex-wrap mt-11">
                <div class="md:max-w-[45%] rounded-lg ">
                    <img
                        alt="feature"
                        class="rounded-lg px-4 py-2 "
                        src="/images/exp.png"
                    />
                </div>
                <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <div
                        class="flex flex-col mb-4 lg:items-start items-center bg-[#D65A31] p-2 rounded-2xl hover:bg-[#e24a1b]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className=" flex ">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    class="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className=" flex justify-center items-center ml-2 mb-4">
                                <p className="flex justify-end text-[#863e27] font-semibold">
                                    {" "}
                                    2011 - 2014
                                </p>
                            </div>
                        </div>

                        <div class="flex-grow">
                            <h2 class=" text-lg title-font font-bold text-gray-50">
                                Junior high school
                            </h2>
                            <p class="leading-relaxed text-base text-gray-200">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy. Gastropub indxgo
                                juice poutine.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col mb-4 lg:items-start items-center bg-[#D65A31] p-2 rounded-2xl"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="flex">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    class="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className=" flex justify-center items-center ml-2 mb-4">
                                <p className="flex justify-end text-[#863e27] font-semibold">
                                    {" "}
                                    2011 - 2014
                                </p>
                            </div>
                        </div>
                        <div class="flex-grow">
                            <h2 class=" text-lg title-font font-bold text-gray-50">
                                Higher Secondary Experience
                            </h2>
                            <p class="leading-relaxed text-base text-gray-200">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy. Gastropub indxgo
                                juice poutine.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col mb-4 lg:items-start items-center bg-[#D65A31] p-2 rounded-2xl"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                class="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class=" text-lg title-font font-bold text-gray-50">
                                Bachelor of Technology
                            </h2>
                            <p class="leading-relaxed text-base text-gray-200">
                                Blue bottle crucifix vinyl post-ironic four
                                dollar toast vegan taxidermy. Gastropub indxgo
                                juice poutine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
