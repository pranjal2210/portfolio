import React, { useEffect, useState } from "react";
import LogoP from "../assets/images/P_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUserTie,
  faUserGraduate,
  faBriefcase,
  faScrewdriverWrench,
  faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    const handleScroll = () => {
      const sections = container.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          container.scrollTop >= sectionTop - sectionHeight * 0.25 &&
          container.scrollTop < sectionTop + sectionHeight * 0.75
        ) {
          setActiveSection(section.id);
        }
      });
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ x: "-100px" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#181818] w-16 h-full absolute top-0 z-[3] min-h-[500px] flex flex-col justify-between overflow-hidden"
    >
      <div
        className="block cursor-pointer"
        onClick={() => handleClick("Home")}
      >
        <img src={LogoP} alt="Logo" className="block my-2 mx-auto w-6 h-auto" />
        <span className="block text-center text-[#fff] font-semibold text-sm tracking-[2px]">
          Pranjal
        </span>
      </div>

      <nav className="flex flex-col w-full items-center justify-center">
        <p
          className={`${
            activeSection === "Home" ? "text-[#ffd700]" : "text-[#4d4d4e]"
          } text-[22px] h-14 w-full flex items-center justify-center hover:text-[#181818] cursor-pointer transition-all duration-300 relative before:content-['Home'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xs before:text-[#ffd700] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300`}
          onClick={() => handleClick("Home")}
        >
          <FontAwesomeIcon
            icon={faHome}
            color="#4d4d4e"
            className="text-inherit"
          />
        </p>

        <p
          className={`${
            activeSection === "About" ? "text-[#ffd700]" : "text-[#4d4d4e]"
          } text-[22px] h-14 w-full flex items-center justify-center hover:text-[#181818] cursor-pointer transition-all duration-300 relative before:content-['About'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xs before:text-[#ffd700] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300`}
          onClick={() => handleClick("About")}
        >
          <FontAwesomeIcon
            icon={faUserTie}
            color="#4d4d4e"
            className="text-inherit"
          />
        </p>

        <p
          className={`${
            activeSection === "Education" ? "text-[#ffd700]" : "text-[#4d4d4e]"
          } text-[22px] h-14 w-full flex items-center justify-center hover:text-[#181818] cursor-pointer transition-all duration-300 relative before:content-['Education'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xs before:text-[#ffd700] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300`}
          onClick={() => handleClick("Education")}
        >
          <FontAwesomeIcon
            icon={faUserGraduate}
            color="#4d4d4e"
            className="text-inherit"
          />
        </p>

        <p
          className={`${
            activeSection === "Work" ? "text-[#ffd700]" : "text-[#4d4d4e]"
          } text-[22px] h-14 w-full flex items-center justify-center hover:text-[#181818] cursor-pointer transition-all duration-300 relative before:content-['Work'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xs before:text-[#ffd700] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300`}
          onClick={() => handleClick("Work")}
        >
          <FontAwesomeIcon
            icon={faBriefcase}
            color="#4d4d4e"
            className="text-inherit"
          />
        </p>

        <p
          className={`${
            activeSection === "Skills" ? "text-[#ffd700]" : "text-[#4d4d4e]"
          } text-[22px] h-14 w-full flex items-center justify-center hover:text-[#181818] cursor-pointer transition-all duration-300 relative before:content-['Skills'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xs before:text-[#ffd700] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300`}
          onClick={() => handleClick("Skills")}
        >
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            color="#4d4d4e"
            className="text-inherit"
          />
        </p>

        <p
          className={`${
            activeSection === "Projects" ? "text-[#ffd700]" : "text-[#4d4d4e]"
          } text-[22px] h-14 w-full flex items-center justify-center hover:text-[#181818] cursor-pointer transition-all duration-300 relative before:content-['Projects'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xs before:text-[#ffd700] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300`}
          onClick={() => handleClick("Projects")}
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            color="#4d4d4e"
            className="text-inherit"
          />
        </p>

        <p
          className={`${
            activeSection === "Contact" ? "text-[#ffd700]" : "text-[#4d4d4e]"
          } text-[22px] h-14 w-full flex items-center justify-center hover:text-[#181818] cursor-pointer transition-all duration-300 relative before:content-['Contact'] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:text-xs before:text-[#ffd700] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300`}
          onClick={() => handleClick("Contact")}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            className="text-inherit"
          />
        </p>
      </nav>

      <ul className="text-center">
        <li className="p-1">
          <a
            className="text-base"
            href="https://www.linkedin.com/in/pranjal-sengar-74248022a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
          </a>
        </li>
        <li className="p-1">
          <a
            className="text-base"
            href="https://github.com/pranjal2210"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
          </a>
        </li>
        <li className="p-1">
          <a
            className="text-base"
            href="https://www.instagram.com/oyepranjalll"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="#b9b9b9" />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
