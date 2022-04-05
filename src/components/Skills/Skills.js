import React from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";

function Skills() {
    return (
        <div className="skills">
            <div className="text-center items-center justify-center mb-[-200px] text-white ">
                <h1 className="section-title-01">Skills</h1>
                <h2 className="section-title-02 ">Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll ">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box " key={id}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 className=" text-yellow-700">{skill}</h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Skills;
