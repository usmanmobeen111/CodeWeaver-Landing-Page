import React from "react";
import { DiMongodb, DiMysql, DiNodejs } from "react-icons/di";
import { FaCss3, FaGit, FaHtml5, FaJs, FaPhp, FaReact } from "react-icons/fa";
import { SiCplusplus, SiExpress, SiTailwindcss } from "react-icons/si";

const techIcons = [
  { icon: <FaHtml5 />, name: "HTML", var: "--color-html" },
  { icon: <FaCss3 />, name: "CSS", var: "--color-css" },
  { icon: <FaJs />, name: "JavaScript", var: "--color-js" },
  { icon: <FaReact />, name: "React", var: "--color-react" },
  { icon: <SiTailwindcss />, name: "Tailwind", var: "--color-tailwind" },
  { icon: <DiNodejs />, name: "Node.js", var: "--color-node" },
  { icon: <SiExpress />, name: "Express", var: "--color-express" },
  { icon: <DiMongodb />, name: "MongoDB", var: "--color-mongodb" },
  { icon: <FaGit />, name: "Git", var: "--color-github" },
  { icon: <DiMysql />, name: "MySQL", var: "--color-mysql" },
  { icon: <FaPhp />, name: "PHP", var: "--color-php" },
  { icon: <SiCplusplus />, name: "C++", var: "--color-cpp" },
];

const TechStack = () => {
  return (
    <div className="bg-green-50 py-16 px-4" id="tech">
      <h1 className="text-3xl sm:text-4xl text-second font-bold text-center mb-12">
        Tech Stack
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 group"
            aria-label={tech.name}
          >
            <div
              className="text-5xl sm:text-6xl md:text-7xl"
              style={{ color: `var(${tech.var})` }}
            >
              {tech.icon}
            </div>
            <p className="mt-3 text-sm sm:text-base font-semibold text-gray-700 group-hover:text-current transition-colors duration-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
