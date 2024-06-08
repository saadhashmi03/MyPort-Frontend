// src/Components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <nav className="bg-transparent py-4">
      <div className="flex items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-text hover:text-gray-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-text hover:text-gray-300 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-text hover:text-gray-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-text hover:text-gray-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden z-10" onClick={handleClick}>
          {!nav ? <FaBars className="navbar-text" /> : <FaTimes className="navbar-text" />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
          <li className="py-6 text-4xl cursor-pointer">
            <Link
              onClick={handleClick}
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-text hover:text-gray-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            <Link
              onClick={handleClick}
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-text hover:text-gray-300 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            <Link
              onClick={handleClick}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-text hover:text-gray-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl cursor-pointer">
            <Link
              onClick={handleClick}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-text hover:text-gray-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
