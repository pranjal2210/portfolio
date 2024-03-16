import React from "react";
import TextSpan from "./TextSpan";
import { motion } from "framer-motion";

const Work = () => {
  const workexp = "Work Experience".split("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full will-change-contents snap-center flex items-center px-24 py-8 relative"
      id="Work"
    >
      <div className="pl-24 pr-8 w-full">
        <h1
          className="text-5xl font-heading text-[#fff] font-normal mt-0 relative mb-10"
          id="name-heading"
        >
          <span className="text-[#8d8d8d] font-normal text-sm font-sans tracking-[3px]">
            WHAT I HAVE DONE SO FAR
          </span>
          <br />
          {workexp.map((char, index) => (
            <TextSpan key={index}>{char === " " ? "\u00A0" : char}</TextSpan>
          ))}
        </h1>

        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-white">
              • Full Stack Developer - Intern
            </h1>
            <h2 className="text-base text-[#dedede]">January 2024 - Present</h2>
          </div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-base text-[#dedede] ml-4">
              VisionClara IT Solutions
            </h1>
            <h2 className="text-base text-[#dedede]">Bhopal, India</h2>
          </div>
          <p className="text-sm ml-4 text-[#8d8d8d] tracking-[1px] mb-1">
            ▸ Understanding the project requirements.
          </p>
          <p className="text-sm ml-4 text-[#8d8d8d] tracking-[1px] mb-1">
            ▸ Developing responsive and intuitive interfaces as per the
            requirements.
          </p>
          <p className="text-sm ml-4 text-[#8d8d8d] tracking-[1px] mb-1">
            ▸ Creating scalable RESTful APIs for diverse functionalities and
            managing API documentation.
          </p>
          <p className="text-sm ml-4 text-[#8d8d8d] tracking-[1px] mb-1">
            ▸ Seamlessly connecting frontend and backend, enabling dynamic
            interactions through APIs.
          </p>
          <p className="text-sm ml-4 text-[#8d8d8d] tracking-[1px]">
            ▸ Addressing feedback effectively, enhancing code quality and
            maintainability.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
