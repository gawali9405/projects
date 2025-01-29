import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <nav className=" bg-white p-4 sm:flex sm:flex-wrap justify-between items-center shadow-lg fixed w-full z-10">
      <div className="logo mx-10">
        <img src="/images/logo.avif" alt="image" className="h-13 w-auto rounded-b-full" />
      </div>
      <div className="flex relative">
        <input type="text" placeholder="Search Here..." className="border border-gray-300 rounded-md p-1  outline-gray-300  px-3"/>
        <IoIosSearch  className="absolute top-1.5 right-2 size-6 bg-white cursor-pointer"/>
      </div>
      <div className="text-xl ">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-pink-400 m-4" : "hover:text-pink-400 transition-all duration-200 m-4" }>Home</NavLink>
        <NavLink to="/about" className={ ({isActive})=> isActive ? "text-pink-400 m-4":"hover:text-pink-400 transition-all duration-200 m-4"}>About</NavLink> 
        <NavLink to="/contact" className={ ({isActive})=> isActive ? "text-pink-400 m-4":"hover:text-pink-400 transition-all duration-200 m-4"}>Contact</NavLink> 
        <NavLink to="/products" className={({isActive})=> isActive ? "text-pink-400 m-4":"hover:text-pink-400 transition-all duration-200 m-4"}>Product</NavLink>
        <NavLink to="/login" className={({isActive})=> isActive ? "text-pink-400 m-4":"hover:text-pink-400 transition-all duration-200 m-4  "}>Login</NavLink>
      </div>
    </nav>
  );
};

export default Header;
