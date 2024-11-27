"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#03001417] backdrop-blur-md shadow-lg shadow-orange-600/50 fixed w-full z-50 top-0">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="cursor-pointer hover:animate-slowspin sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]"
            />
          </a>
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-lg sm:text-xl text-orange-600 font-extrabold">
              Fusion Calling
            </span>
            <span className="text-[#FF4500] text-[10px] self-end mr-[8px] -mt-1 font-bold">
              Labs
            </span>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 text-gray-200 hover:bg-orange-600/20 rounded-lg focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
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
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col p-4 mt-4 space-y-2 lg:space-y-0 border border-orange-600/50 rounded-lg lg:flex-row lg:space-x-6 xl:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent">
            {["Home", "Demo Call", "Features", "FAQs"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`block py-2 px-3 rounded-lg ${
                    item === "Home" ? "text-yellow-400" : "text-gray-200"
                  } hover:bg-orange-600 hover:text-white font-medium transition duration-300 transform hover:-translate-y-1`}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="lg:hidden">
              <a
                href="https://cal.com/mralamin/30min?"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 rounded-lg text-gray-200 hover:bg-orange-600 hover:text-white transition duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <Link
            href="https://cal.com/mralamin/30min?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 sm:h-11 lg:h-12 items-center justify-center rounded-xl border border-orange-600 bg-orange-600 px-4 sm:px-5 lg:px-6 font-medium text-white hover:bg-gray-800 transition duration-300 transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
