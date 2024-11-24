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
    <nav className="bg-[#03001417] backdrop-blur-md shadow-lg shadow-orange-600/50 fixed w-full z-50 top-0 px-10">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2">
        <div className="flex items-center  space-x-3">
          <a href="#Home">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>

          <span className="self-center text-xl font-bold text-orange-600">
            Fusion Calling
          </span>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
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
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto `}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4  border border-orange-600 rounded-md md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 rounded hover:bg-orange-600 text-yellow-400 font-bold transition duration-500 transform hover:-translate-y-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#demo"
                className="block py-2 px-3 rounded hover:bg-orange-600 text-gray-200 transition duration-500 transform hover:-translate-y-2"
              >
                Demo Call
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="block py-2 px-3 rounded hover:bg-orange-600 text-gray-200 transition duration-500 transform hover:-translate-y-2"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#faq"
                className="block py-2 px-3 rounded hover:bg-orange-600 text-gray-200 transition duration-500 transform hover:-translate-y-2"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="https://cal.com/mralamin/30min?"
                target="-blank"
                className="md:hidden block py-2 px-3 rounded hover:bg-orange-600 text-gray-200 transition duration-500 transform hover:-translate-y-2"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          <Link
            href="https://cal.com/mralamin/30min?"
            target="-blank"
            className="transition duration-500 transform hover:-translate-y-2 custom-hide inline-flex h-12 items-center justify-center rounded-xl border border-orange-600 bg-orange-600 px-6 font-medium text-white hover:bg-gray-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
