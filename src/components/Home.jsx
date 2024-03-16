import React from "react";
import TextSpan from "./TextSpan";
import { Tilt } from "react-tilt";
import MyImg from "../assets/images/happy.jpeg";
import { motion } from "framer-motion";

const Home = () => {
  const nameArr = "Pranjal".split("");
  const descArr = "Full Stack Developer".split("");
  const descArr2 = "& Programmer".split("");

  const scrollToContact = () => {
    const contactDiv = document.getElementById("Contact");
    if (contactDiv) {
      contactDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full will-change-contents snap-center flex items-center px-24 py-8"
      id="Home"
    >
      <div className="pl-24 pr-8">
        <h1
          className="text-5xl font-heading text-[#fff] font-normal mt-0 relative mb-10"
          id="name-heading"
        >
          <TextSpan>H</TextSpan>
          <TextSpan>i,</TextSpan>
          <br />
          <TextSpan>I</TextSpan>
          <TextSpan>'m</TextSpan>
          <span>&nbsp;</span>
          {nameArr.map((char, index) => (
            <TextSpan key={index}>{char === " " ? "\u00A0" : char}</TextSpan>
          ))}
          <br />
          {descArr.map((char, index) => (
            <TextSpan key={index}>{char === " " ? "\u00A0" : char}</TextSpan>
          ))}
          <br />
          {descArr2.map((char, index) => (
            <TextSpan key={index}>{char === " " ? "\u00A0" : char}</TextSpan>
          ))}
        </h1>
        <p className="text-[#8d8d8d] mt-6 font-normal text-xs font-sans tracking-[3px]">
          Committed to a journey of perpetual growth and learning.
        </p>
        <button
          onClick={scrollToContact}
          className="text-[#00ff7f] text-[13px] font-normal tracking-[4px] font-sans py-[10px] px-[18px] border border-[#00ff7f] mt-7 whitespace-nowrap rounded-lg hover:bg-[#00ff7f] hover:text-[#000] transition-all duration-500 hover:shadow-buttonShadow"
        >
          CONTACT ME
        </button>
      </div>

      <div className="flex items-center min-w-48 justify-center mx-auto">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 40,
          }}
        >
          <img
            src={MyImg}
            alt="myimg"
            className="rounded-full w-56 cursor-pointer transition-all duration-500 ease-in-out animate-shadow shadow-imgShadow hover:shadow-imgShadowHover hover:animate-shadowHover"
          />
        </Tilt>
      </div>
    </motion.section>
  );
};

export default Home;