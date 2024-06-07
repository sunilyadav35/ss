"use client";

import React from "react";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";
import Image from 'next/image'; // If using Next.js, you can use next/image for optimized images
// import developerActivity from '../../../public/images/developerActivity.svg'; 
import WorkImg from '../../../public/images/workimg.svg'
import { skillsSection } from "@/Editme";
import SoftwareSkill from "@/components/softwareSkills/SoftwareSkill";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade duration={1000}>
          <div className="skills-image-div">
            <Image alt="Sunil Working" src={WorkImg} layout="intrinsic" width={500} height={500} />
          </div>
        </Fade>
        <Fade duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title}</h1>
            <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skill, index) => (
                <p key={index} className="subTitle skills-text">{skill}</p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
