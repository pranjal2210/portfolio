import React from "react";
import TextSpan from "./TextSpan";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Education = () => {
  const educationtext = "Education".split("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full will-change-contents snap-center flex items-center px-24 py-8 relative"
      id="Education"
    >
      <div className="pl-24 pr-8 w-full">
        <h1
          className="text-5xl font-heading text-[#fff] font-normal mt-0 relative mb-10"
          id="name-heading"
        >
          <span className="text-[#8d8d8d] font-normal text-sm font-sans tracking-[3px]">
            ACADEMIC BACKGROUND
          </span>
          <br />
          {educationtext.map((char, index) => (
            <TextSpan key={index}>{char === " " ? "\u00A0" : char}</TextSpan>
          ))}
        </h1>

        <div className="flex gap-2 flex-wrap justify-center h-auto">
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 40,
            }}
          >
            <div className="bg-black/20 backdrop-blur-[3px] p-7 rounded-3xl max-w-[250px] xs:max-w-full h-full">
              <p className="text-[#8d8d8d] font-semibold font-sans mb-1 tracking-[1px] text-[11px]">
                Post Graduation
              </p>
              <p className="text-white font-black text-lg tracking-[1px] mb-4">
                Master of Computer Applications
              </p>
              <p className="text-[#dedede] font-medium text-xs tracking-[1px] mb-3">
                Madhav Institute of Technology and Science, Gwalior
              </p>
              <p className="text-[#dedede] text-xs mb-2 tracking-[1px]">
                2022 – 2024
              </p>
              <p className="text-[#dedede] text-xs tracking-[1px]">
                CGPA/Percentage – 8.41
              </p>
            </div>
          </Tilt>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 40,
            }}
          >
            <div className="bg-black/20 backdrop-blur-[3px] p-7 rounded-3xl max-w-[250px] xs:max-w-full h-full">
              <p className="text-[#8d8d8d] font-semibold font-sans mb-1 tracking-[1px] text-[11px]">
                Under Graduation
              </p>
              <p className="text-white font-black text-lg tracking-[1px] mb-4">
                B.Sc. in Computer Science
              </p>
              <p className="text-[#dedede] font-medium text-xs tracking-[1px] mb-3">
                Srimant Madhavrao Scindia Govt. Model Science College, Gwalior
              </p>
              <p className="text-[#dedede] text-xs mb-2 tracking-[1px]">
                2019 – 2022
              </p>
              <p className="text-[#dedede] text-xs tracking-[1px]">
                CGPA/Percentage – 78.36%
              </p>
            </div>
          </Tilt>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 40,
            }}
          >
            <div className="bg-black/20 backdrop-blur-[3px] p-7 rounded-3xl max-w-[250px] xs:max-w-full h-full">
              <p className="text-[#8d8d8d] font-semibold font-sans mb-1 tracking-[1px] text-[11px]">
                Higher Secondary Certificate
              </p>
              <p className="text-white font-black text-lg tracking-[1px] mb-4">
                Miss Sill Higher Secondary School, Gwalior
              </p>
              <p className="text-[#dedede] font-medium text-xs tracking-[1px] mb-3">
                Madhya Pradesh Board of Secondary Education
              </p>
              <p className="text-[#dedede] text-xs mb-2 tracking-[1px]">
                2018-19
              </p>
              <p className="text-[#dedede] text-xs tracking-[1px]">
                CGPA/Percentage – 85.80%
              </p>
            </div>
          </Tilt>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 40,
            }}
          >
            <div className="bg-black/20 backdrop-blur-[3px] p-7 rounded-3xl max-w-[250px] xs:max-w-full h-full">
              <p className="text-[#8d8d8d] font-semibold font-sans mb-1 tracking-[1px] text-[11px]">
                Secondary School Certificate
              </p>
              <p className="text-white font-black text-lg tracking-[1px] mb-4">
                Miss Sill Higher Secondary School, Gwalior
              </p>
              <p className="text-[#dedede] font-medium text-xs tracking-[1px] mb-3">
                Madhya Pradesh Board of Secondary Education
              </p>
              <p className="text-[#dedede] text-xs mb-2 tracking-[1px]">
                2016-17
              </p>
              <p className="text-[#dedede] text-xs tracking-[1px]">
                CGPA/Percentage – 86.50%
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
