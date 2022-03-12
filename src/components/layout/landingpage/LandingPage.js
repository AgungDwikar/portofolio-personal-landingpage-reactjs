import React from "react";
import Banner from "../../../views/pages/Banner";
import Benefits from "../../../views/pages/Benefits";
import Blogs from "../../../views/pages/Blogs";
import Contacttwo from "../../../views/pages/Contacttwo";
import Education from "../../../views/pages/Education";
import Footer from "../../../views/pages/Footer";
import Herotwo from "../../../views/pages/Herotwo";
import Navbar from "../../../views/pages/Navbar";
import Portofolio from "../../../views/pages/Portofolio";
import UpBtn from "../../../views/pages/UpBtn";

function LandingPage() {
    return (
        <div className=" bg-[#0E0B0C] scroll-smooth ">
            {/* <img
                src="./images/imgnih.png"
                alt="img"
                className="w-full bg-cover absolute mt-28 flex sm:h-[500px]"
            /> */}

            <Navbar />
            <Herotwo />
            <UpBtn />
            <Benefits />
            <Education />
            <Portofolio />
            <Banner />
            <Blogs />
            <Contacttwo />
            <Footer />
        </div>
    );
}

export default LandingPage;
