import React from "react";
import { Link } from "react-router-dom";

import { projectsData } from "../../data/projectsData";
import { HiArrowRight } from "react-icons/hi";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

function Projects() {
    return (
        <>
            {projectsData.length > 0 && (
                <div
                    className="projects  "
                    id="projects"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="text-center items-center justify-center mb-[-220px] text-white ">
                        <h1 className="section-title-01">Projects</h1>
                        <h2 className="section-title-02 ">Projects</h2>
                    </div>
                    <div className="projects--body mt-28">
                        <div className="projects--bodyContainer ">
                            {projectsData.slice(0, 3).map((project) => (
                                <SingleProject
                                    theme={project.theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {projectsData.length > 3 && (
                            <div
                                className="projects--viewAll "
                                data-aos="fade-right"
                            >
                                <Link to="/projects">
                                    <button className=" bg-[#de643c] p-4 text-white">
                                        View All
                                        <HiArrowRight className=" bg-slate-900 text-white w-8 h-8 rounded-full" />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;
