import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col text-slate-800 gap-4">
      <h1 className="text-4xl font-bold">Hey, I'm <span className="text-first">Usman</span> &#128075;</h1>
      <h2 className="text-2xl">
        aka <span class="text-second">CodeWeaver</span>
      </h2>
      <p className="text-center text-xl">
        I build full-stack apps, teach code, and love solving<br />real-world
        problems through web development.
      </p>

      <div className="btn m-4 flex gap-6">
        <button className=" rounded-lg px-4 py-2 bg-first text-white text-xl hover:bg-second duration-300 cursor-pointer">View Projects</button>
        <button className=" rounded-lg px-4 py-2 bg-first text-white text-xl hover:bg-second duration-300 cursor-pointer">Contact</button>
      </div>
    </div>
  );
};

export default Hero;
