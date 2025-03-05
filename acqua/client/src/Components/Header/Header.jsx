import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({count}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img
            src="/images/logo.avif"
            alt="Logo"
            className="h-14 w-auto rounded-b-full"
          />
        </div>

        {/* Search Bar */}
        <div className="relative hidden sm:flex items-center">
          <input
            type="text"
            placeholder="Search Here..."
            className="border border-gray-300 rounded-md py-2 px-3 outline-none w-64"
          />
          <IoIosSearch className="absolute right-3 top-2.5 text-gray-500 text-xl cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-white shadow-md sm:shadow-none sm:flex items-center gap-6 text-lg transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold m-4 block sm:inline"
                : "hover:text-pink-500  font-semibold transition-all duration-200 m-4 block sm:inline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold m-4 block sm:inline"
                : "hover:text-pink-500  font-semibold transition-all duration-200 m-4 block sm:inline"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold m-4 block sm:inline"
                : "hover:text-pink-500  font-semibold transition-all duration-200 m-4 block sm:inline"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold m-4 block sm:inline"
                : "hover:text-pink-500  font-semibold  transition-all duration-200 m-4 block sm:inline"
            }
          >
            Login
          </NavLink> 
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold m-4 flex items-center space-x-2"
                : "hover:text-pink-500 font-semibold transition-all duration-200 m-4 flex items-center space-x-2"
            }
          >
            <FaShoppingCart className="text-2xl" /> 
            <span className="text-lg relative bottom-3 right-2  text-red-500">{count}</span> 
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
