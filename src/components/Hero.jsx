import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 px-4 text-slate-800 bg-green-50 text-center" id="home">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Hey, I'm <span className="text-second">Usman</span> 👋
      </h1>

      <h2 className="text-xl sm:text-2xl md:text-3xl">
        aka <span className="text-second">CodeWeaver</span>
      </h2>

      <p className="text-base sm:text-lg md:text-xl max-w-[90vw] sm:max-w-screen-sm">
        I build full-stack apps, teach code, and love solving
        <br className="hidden sm:block" />
        real-world problems through web development.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
        <a href="#projects" className="rounded-lg px-6 py-3 bg-first text-white text-lg hover:bg-second duration-300 cursor-pointer">
          View Projects
        </a>
        <a href="#contact" className="rounded-lg px-6 py-3 bg-first text-white text-lg hover:bg-second duration-300 cursor-pointer">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Hero;
