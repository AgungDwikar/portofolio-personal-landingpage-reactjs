import React, { useState, useEffect } from "react";
import Benefits from "../../aboutme/Benefits";
import Landing from "../../landing/Landing";
import Education from "../../education/Education";
import Skills from "../../Skills/Skills";
import Experience from "../../Experience/Experience";
import Projects from "../../Projects/Projects";
import Blogs from "../../Blogs/Blogs";
import Banners from "../../Banner/Banners";
import ContactMe from "../../GetContact/ContactMe";
import UpBtn from "../../BtnToTop/UpBtn";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import LoadPage from "../../loadpage/LoadPage";

function LandingPage() {
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    },[]);

    return (
        <div className=" bg-[#222831] scroll-smooth ">
            {Loading === true ? (
                <LoadPage />
            ) : (
                <>
                    <Navbar />
                    <Landing />
                    <UpBtn />
                    <Benefits />
                    <Education />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Blogs />
                    <Banners />
                    <ContactMe />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default LandingPage;
