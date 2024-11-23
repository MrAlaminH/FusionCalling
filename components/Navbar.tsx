"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#03001417] backdrop-blur-md shadow-lg shadow-orange-600/50 fixed w-full z-50 top-0 px-10 h-20">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between h-full">
        <div className="flex items-center space-x-3">
          <a href="#Home">
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="cursor-pointer hover:animate-slowspin w-12 h-12"
            />
          </a>
          <span className="self-center text-xl font-bold text-orange-500">
            Fusion Calling
          </span>
        </div>

        <div className="md:hidden">
          <Button onClick={toggleMenu} className="text-gray-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col p-4 mt-4 border border-orange-600 rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {["Home", "Services", "Testimonial", "Projects", "About Us"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 px-3 rounded hover:bg-orange-600 text-gray-200 transition duration-500 transform hover:-translate-y-2"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="#ContactForm"
                className="md:hidden block py-2 px-3 rounded hover:bg-orange-600 text-gray-200 transition duration-500 transform hover:-translate-y-2"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <Button className="transition duration-500 transform hover:-translate-y-2 custom-hide inline-flex h-12 items-center justify-center rounded-xl border border-orange-600 bg-orange-600 px-6 font-medium text-white hover:bg-gray-800">
            <a href="#ContactForm">Contact Us</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
