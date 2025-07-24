import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Hero = () => {
  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center gap-6 px-4 text-slate-800 bg-green-50 text-center"
      id="home"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        variants={fadeInUp}
        custom={1}
      >
        Hey, I'm <span className="text-second">Usman</span> 👋
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl"
        variants={fadeInUp}
        custom={2}
      >
        aka <span className="text-second">CodeWeaver</span>
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg md:text-xl max-w-[90vw] sm:max-w-screen-sm"
        variants={fadeInUp}
        custom={3}
      >
        I build full-stack apps, teach code, and love solving
        <br className="hidden sm:block" />
        real-world problems through web development.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
        variants={fadeInUp}
        custom={4}
      >
        <a
          href="#projects"
          className="rounded-lg px-6 py-3 bg-first text-white text-lg hover:bg-second duration-300 cursor-pointer"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-lg px-6 py-3 bg-first text-white text-lg hover:bg-second duration-300 cursor-pointer"
        >
          Contact
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
