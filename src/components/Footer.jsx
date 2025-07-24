import React from 'react';
import { FaGithub, FaHeart, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-second text-white py-6 px-4 text-center">
      {/* Copyright */}
      <div className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} <span className="font-semibold">CodeWeaver</span> | All Rights Reserved
      </div>

      {/* Made with love */}
      <div className="flex justify-center items-center gap-1 mt-2 text-sm md:text-base flex-wrap">
        Made with
        <FaHeart className="text-red-500 animate-pulse" />
        by <span className="font-bold text-white">Usman Mobeen</span>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <a href="https://www.instagram.com/usmanmobeen111" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl transition duration-300 hover:text-[var(--color-instagram)]" />
        </a>
        <a href="https://github.com/usmanmobeen111" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl transition duration-300 hover:text-[var(--color-github)]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
