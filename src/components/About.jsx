import React from "react";

const About = () => {
  return (
    <div className="p-20 text-slate-800">
      <div className="flex items-center justify-center gap-10">
        <div>
          <img
            className="w-[500px]"
            src="/src/assets/3d-illustration-person-with-sunglasses.png"
            alt=""
          />
        </div>
        <div className="w-[40vw]">
          <h1 className="text-4xl font-bold text-first">About Me</h1>
          <p className="text-xl">
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
