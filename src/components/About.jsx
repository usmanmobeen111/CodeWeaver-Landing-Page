import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="p-6 text-slate-800" id="about">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Image with animation */}
        <motion.div
          className="w-full max-w-[500px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            className="w-full"
            src="/src/assets/3d-illustration-person-with-sunglasses.png"
            alt="Developer illustration"
          />
        </motion.div>

        {/* Text with animation */}
        <motion.div
          className="w-full md:w-[40vw]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-second mb-4 text-center md:text-left">
            About Me
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center md:text-left">
            I'm a self-taught developer from Lahore, Pakistan. I've worked with
            HTML, CSS, JavaScript, React, Tailwind, Node.js, MongoDB, and more.
            I create educational content for beginners on Instagram. My passion?
            Turning ideas into interactive, useful, and beautiful digital
            experiences.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
