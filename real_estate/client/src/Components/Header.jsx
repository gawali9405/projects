import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaX, FaBars } from "react-icons/fa6";
import { useDarkMode } from "./DarkModeContext";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];
  console.log(darkMode);

  return (
    <nav
      className={`${
        darkMode ? "bg-black" : "bg-white"
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      {/* Logo */}
      <div id="logo">
        <img src={logo} alt="logo image" className="lg:w-[150px] w-[120px]" />
      </div>

      {/* Desktop Menu */}
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map((item, index) => (
          <Link
            key={index}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 hover:bg-red-400 hover:text-white"
            to={item.path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {item.link}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaX className="text-black text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-black text-2xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map((item, index) => (
            <Link
              key={index}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-500 hover:text-black w-full text-center"
              to={item.path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu} // Closes the menu when a link is clicked
            >
              {item.link}
            </Link>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center items-center lg:gap-8 gap-2">
        <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaPhoneAlt className="size-5 text-red-800" />
          <h1 className="lg:text-xl text-sm text-black font-semibold">
            785 245 2156
          </h1>
        </div>
        <div>
          <FaUserCircle className="size-6 text-red-800 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
