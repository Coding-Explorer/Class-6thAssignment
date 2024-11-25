"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={130}
            height={40}
            priority
            className="w-auto h-auto"
          />
        </div>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center md:space-x-6 absolute md:static top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <a
              href="#home"
              className="text-gray-700 hover:text-black font-medium"
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-gray-700 hover:text-black font-medium"
            >
              Courses
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-black font-medium"
            >
              Services
            </a>
            <a
              href="#achievement"
              className="text-gray-700 hover:text-black font-medium"
            >
              Achievement
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-black font-medium"
            >
              About Us
            </a>
            <a
              href="#testimonial"
              className="text-gray-700 hover:text-black font-medium"
            >
              Testimonial
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 p-4 md:p-0">
            <button className="px-4 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100">
              Login
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;