import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Tech Stack", "Contact"];
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex justify-between px-10 items-center py-4">
        <div className="logo text-slate-800 flex gap-2 items-center">
          <img className="w-10" src="/logo.svg" alt="" />
          <h1 className="text-2xl font-bold">
            Code<span className="text-second">Weaver</span>
          </h1>
        </div>
        <ul className="text-slate-800 md:flex text-xl gap-4 hidden">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span className="transition duration-300 hover:text-first">
                {link}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-first scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-3xl cursor-pointer text-first" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-500 transform transition-transform duration-300 ease-in-out z-40 text-white ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col items-center justify-center gap-6 mt-10 text-lg font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span className="transition duration-300 hover:text-first">
                {link}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-first scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
