import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

// Project Data
const projects = [
  {
    title: "Cactus Website",
    image: "/cactus.png",
    description: "A minimal and responsive cactus-themed website built using HTML, CSS, and JavaScript.",
    tech: ["html", "css", "js"],
    github: "https://github.com/usmanmobeen111/Cactus-Website",
    preview: "https://cactus-website-by-usman-mobeen.netlify.app/",
  },
  {
    title: "Chips Website",
    image: "/chips.png",
    description: "A minimal and responsive chips-themed website built using HTML, CSS, and JavaScript.",
    tech: ["html", "css", "js"],
    github: "https://github.com/usmanmobeen111/Chips-Website",
    preview: "https://chips-website-by-usman-mobeen.netlify.app/",
  },
  {
    title: "Architecture Website",
    image: "/architecture.png",
    description: "A minimal and responsive architecture-themed website built using HTML, CSS, and JavaScript.",
    tech: ["html", "css", "js"],
    github: "https://github.com/usmanmobeen111/Architecture-Website",
    preview: "https://architecture-website-by-usman-mobeen.netlify.app/",
  },
  {
    title: "Sneakers Website",
    image: "/sneakers.png",
    description: "A minimal and responsive sneakers-themed website built using HTML, CSS, and JavaScript.",
    tech: ["html", "css", "js"],
    github: "https://github.com/usmanmobeen111/Sneaker-Website",
    preview: "https://sneaker-website-by-usman-mobeen.netlify.app/",
  },
];

// Tailwind-based tech badge classes
const techColors = {
  html: "bg-html",
  css: "bg-css",
  js: "bg-js",
};

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4" id="projects">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-4xl font-bold text-second text-center mb-12"
      >
        My Projects
      </motion.h1>

      {/* Grid Container */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 place-items-center w-[70vw] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full max-w-[600px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full object-fit"
            />

            {/* Content */}
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-slate-800">{project.title}</h2>

              <p className="text-gray-600 text-base leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${techColors[tech]}`}
                  >
                    {tech.toUpperCase()}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex justify-center gap-4 flex-wrap">
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-first hover:bg-second transition duration-300 text-white rounded-full shadow-sm"
                >
                  Live Preview <FaArrowRight className="text-sm" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-github hover:bg-github/90 transition duration-300 text-white rounded-full shadow-sm"
                >
                  GitHub <FaGithub className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
