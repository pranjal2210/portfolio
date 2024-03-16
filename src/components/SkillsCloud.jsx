import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const SkillsCloud = () => {
  useEffect(() => {
    return () => {
      const container = ".tagsphere";

      const texts = [
        "ReactJS",
        "NextJS",
        "MongoDB",
        "ExpressJS",
        "NodeJS",
        "Redux",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "C",
        "MySQl",
        "C++",
        "JavaScript",
        "Github",
        "Bootstrap",
        "npm",
        "MUI",
      ];

      const options = {
        radius: 250,
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <span className="tagsphere text-[#ff4500] font-poppins text-lg font-semibold"></span>
  );
};

export default SkillsCloud;
