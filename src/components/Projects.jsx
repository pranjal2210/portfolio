import React from "react";
import TextSpan from "./TextSpan";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import gwaliorCuisine from "../assets/images/GwaliorCuisine.png";
import sams from "../assets/images/SAMS.png";
import workplace from "../assets/images/workplace.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const projecttext = "Projects".split("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full will-change-contents snap-center flex items-center px-24 py-8 relative"
      id="Projects"
    >
      <div className="pl-24 pr-8 w-full">
        <h1
          className="text-5xl font-heading text-[#fff] font-normal mt-0 relative mb-6"
          id="name-heading"
        >
          <span className="text-[#8d8d8d] font-normal text-sm font-sans tracking-[3px]">
            MY WORK
          </span>
          <br />
          {projecttext.map((char, index) => (
            <TextSpan key={index}>{char === " " ? "\u00A0" : char}</TextSpan>
          ))}
        </h1>

        <div className="flex gap-2 justify-center h-auto w-full ">
          <div className="rounded-3xl h-full w-full max-w-[400px] group">
            <Tilt
              options={{
                max: 15,
                scale: 1,
                speed: 40,
              }}
            >
              <div className="relative bg-black/20 backdrop-blur-[3px] p-3 rounded-xl h-full w-full overflow-hidden before:content-[''] before:absolute before:-top-5 before:rounded-bl-full before:-right-5 before:w-16 before:h-16 before:bg-[#1e1e1e] before:shadow-linkShadow before:transition-all before:duration-500 before:ease-in-out before:opacity-0 group-hover:before:opacity-100">
                <a
                  href="https://github.com/pranjal2210/GwaliorsCuisine"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl absolute right-2 top-2 leading-none opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                >
                  <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
                <img
                  src={gwaliorCuisine}
                  alt="gwaliorCuisine"
                  className="w-full h-[170px] rounded-md mb-3 object-cover"
                />
                <h1 className="text-white text-xl mb-2">Gwalior's Cuisine</h1>
                <p className="text-[#bdbdbd] text-xs">
                  This restaurant website boasts a modern, user-friendly design,
                  prioritizing ease of use. Its intuitive interface allows for
                  effortless navigation and online reservations, enhancing the
                  overall dining experience.
                </p>
              </div>
            </Tilt>
          </div>
          <div className="rounded-3xl h-full w-full max-w-[400px] group">
            <Tilt
              options={{
                max: 15,
                scale: 1,
                speed: 40,
              }}
            >
              <div className="relative bg-black/20 backdrop-blur-[3px] p-3 rounded-xl h-full w-full overflow-hidden before:content-[''] before:absolute before:-top-5 before:rounded-bl-full before:-right-5 before:w-16 before:h-16 before:bg-[#1e1e1e] before:shadow-linkShadow before:transition-all before:duration-500 before:ease-in-out before:opacity-0 group-hover:before:opacity-100">
                <a
                  href="https://github.com/pranjal2210/projectsams"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl absolute right-2 top-2 leading-none opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                >
                  <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
                <img
                  src={sams}
                  alt="sams"
                  className="w-full h-[170px] rounded-md mb-3 object-cover"
                />
                <h1 className="text-white text-xl mb-2">
                  Student Attendance Portal
                </h1>
                <p className="text-[#bdbdbd] text-xs">
                  This system automates student attendance tracking, making it
                  efficient and accurate. It streamlines record-keeping,
                  simplifies monitoring, and enhances overall attendance
                  management for educational institutions.
                </p>
              </div>
            </Tilt>
          </div>
          <div className="rounded-3xl h-full w-full max-w-[400px] group">
            <Tilt
              options={{
                max: 15,
                scale: 1,
                speed: 40,
              }}
            >
              <div className="relative bg-black/20 backdrop-blur-[3px] p-3 rounded-xl h-full w-full overflow-hidden before:content-[''] before:absolute before:-top-5 before:rounded-bl-full before:-right-5 before:w-16 before:h-16 before:bg-[#1e1e1e] before:shadow-linkShadow before:transition-all before:duration-500 before:ease-in-out before:opacity-0 group-hover:before:opacity-100">
                <a
                  href="https://github.com/pranjal2210/Collabsphere-Workplace"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl absolute right-2 top-2 leading-none opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                >
                  <FontAwesomeIcon icon={faGithub} color="#fff" />
                </a>
                <img
                  src={workplace}
                  alt="workplace"
                  className="w-full h-[170px] rounded-md mb-3 object-cover"
                />
                <h1 className="text-white text-xl mb-2">
                  CollabSphere | Workplace
                </h1>
                <p className="text-[#bdbdbd] text-xs">
                  This innovative platform simplifies how businesses handle
                  tasks, projects, communication, and document sharing. With
                  real-time messaging, event scheduling, and performance
                  analytics, it's designed to enhance teamwork and productivity.
                </p>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
