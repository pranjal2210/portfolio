import React from "react";
import TextSpan from "./TextSpan";
import { motion } from "framer-motion";
import SkillsCloud from "./SkillsCloud";

const Skills = () => {
  const skilltext = "Technical Skills".split("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full will-change-contents snap-center flex items-center px-24 py-8 relative overflow-hidden"
      id="Skills"
    >
      <div className="pl-24 pr-8 w-1/2">
        <h1
          className="text-5xl font-heading text-[#fff] font-normal mt-0 relative mb-10"
          id="name-heading"
        >
          <span className="text-[#8d8d8d] font-normal text-sm font-sans tracking-[3px]">
            MY SKILLS
          </span>
          <br />
          {skilltext.map((char, index) => (
            <TextSpan key={index}>{char === " " ? "\u00A0" : char}</TextSpan>
          ))}
        </h1>

        <h3 className="text-[#dedede] mt-16 font-normal text-justify text-base tracking-[1px]">
          I love to keep a variety of tools and technologies in my tech stack. I
          also make sure to grasp a hands-on experience of using a tool before
          moving on to the next. I keep myself informed about the newest
          technological advancements.
        </h3>

        <h3 className="text-[#dedede] mt-6 font-normal text-justify text-base tracking-[1px]">
          Looking for a role in a company with the opportunity to work with the
          latest technologies on challenging and diverse projects.
        </h3>
      </div>

      <div className="flex items-center justify-center mx-auto w-1/2">
        <SkillsCloud />
      </div>
    </motion.section>
  );
};

export default Skills;
