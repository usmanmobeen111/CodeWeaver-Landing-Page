import React from "react";

const About = () => {
  return (
    <div className="p-6 text-slate-800" id="about">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        
        <div className="w-full max-w-[500px]">
          <img
            className="w-full"
            src="/src/assets/3d-illustration-person-with-sunglasses.png"
            alt="Developer illustration"
          />
        </div>
        
        <div className="w-full md:w-[40vw]">
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
        </div>

      </div>
    </div>
  );
};

export default About;
