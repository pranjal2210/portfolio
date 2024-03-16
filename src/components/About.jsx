import React from "react";
import TextSpan from "./TextSpan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const About = () => {
  const overview = "Overview".split("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full will-change-contents snap-center flex items-center px-24 py-8 relative"
      id="About"
    >
      <div className="pl-24 pr-8 w-[60%]">
        <h1
          className="text-5xl font-heading text-[#fff] font-normal mt-0 relative mb-10"
          id="name-heading"
        >
          <span className="text-[#8d8d8d] font-normal text-sm font-sans tracking-[3px]">
            INTRODUCTION
          </span>
          <br />
          {overview.map((char, index) => (
            <TextSpan key={index}>{char === " " ? "\u00A0" : char}</TextSpan>
          ))}
        </h1>

        <h3 className="text-[#dedede] mt-16 font-normal text-justify text-base tracking-[1px]">
          An aspiring developer eager to apply my technical skills and knowledge
          to contribute effectively within an organization. With a steadfast
          commitment to continual learning and advancement, I aspire to leverage
          my enthusiasm to deliver to deliver impactful solutions and further
          develop my expertise as part of a collaborative team.
        </h3>

        <h3 className="text-[#dedede] mt-6 font-normal text-justify text-base tracking-[1px]">
          If I need to define myself in one sentence that would be an online
          games lover, and tech-obsessed!!!
        </h3>
      </div>

      <div className="flex items-center justify-center mx-auto w-[40%]">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#81BE01" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
