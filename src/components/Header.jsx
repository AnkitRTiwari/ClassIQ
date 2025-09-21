import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/Group2827.svg";

const MenuSvg = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseSvg = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6l12 12M18 6L6 18"
    />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white px-6 py-4 fixed w-full z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
            <p className="font-inter font-bold text-lg sm:text-xl md:text-2xl">
              ClassIQ
            </p>
          </Link>

          <p
            className="hidden md:block font-poppins text-gray-700 hover:text-black cursor-pointer"
            onClick={() => {
              const coursesSection = document.getElementById("courses");
              coursesSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Courses
          </p>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="bg-black text-white px-4 py-2 rounded-md font-inter font-bold hover:bg-gray-800 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-black text-white px-4 py-2 rounded-md font-inter font-bold hover:bg-gray-800 transition"
          >
            Sign Up
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <CloseSvg /> : <MenuSvg />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mt-2 bg-white shadow-lg rounded-md py-4 flex flex-col items-center space-y-3"
        >
          <Link
            to="/login"
            className="bg-black text-white px-6 py-2 rounded-md font-inter font-bold hover:bg-gray-800 transition w-32 text-center"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-black text-white px-6 py-2 rounded-md font-inter font-bold hover:bg-gray-800 transition w-32 text-center"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
