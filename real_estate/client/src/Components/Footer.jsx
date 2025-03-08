import React from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-300 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia
            minus aliquid deleniti fuga nihil nam maxime autem nostrum harum
            veniam culpa alias, assumenda ad, non consectetur quas, voluptatibus
            accusamus!
          </p>
          <div
            id="socieal-icons"
            className=" flex justify-start items-center gap-4 mt-4"
          >
            <div className="p-3 rounded-xl bg-white cursor-pointer transform hover:scale-110 transition-transform duration-200">
              <FaFacebookF className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white cursor-pointer transform hover:scale-110 transition-transform duration-200">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white cursor-pointer transform hover:scale-110 transition-transform duration-200">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3 rounded-xl bg-white cursor-pointer transform hover:scale-110 transition-transform duration-200">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <p className="text-slate-300">
            © {new Date().getFullYear()} YourCompanyName. All rights reserved.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis consectetur.
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-300">+91 9855328923</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <p className="text-slate-300">8735324567</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-300">domain@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className=" flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt="letest image"
              className="w-[120px] rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-200"
            />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view</h1>
              <p className="text-slate-300">$ 278.43</p>
            </div>
          </div>
          <div className=" flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt="letest image"
              className="w-[120px] rounded-lg cursor-pointer transform hover:scale-110 transition-transform duration-200"
            />
            <div>
              <h1 className="text-lg text-white">Smart view from beach</h1>
              <p className="text-slate-300">$ 543.15</p>
            </div>
          </div>
        </div>
      </footer>

      <div
        id="icon-box"
        className="bg-red-500 p-4 rounded-full cursor-pointer fixed lg:bottom-12 bottom-6 right-6 hover:bg-black"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="text-white size-6" />
        </Link>
      </div>
      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-2 rounded-full bg-orange-500 fixed lg-top-53 right-6 top-28 cursor-pointer"
        >
          {darkMode ? (
            <FaMoon size={25} className="text-black" />
          ) : (
            <FaSun size={25} className="text-black" />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
