import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import heroimg from "../assets/images/heroimg.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "bg-black" : "bg-transparent"}`}>
      <section
        id="hero"
        className="w-full h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg-px-28 px-10 gap-7 z-20 -mb-10"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <h1 data-aos="zoom-in" className="text-6xl text-white font-semibold">
          Find your next Home in Mumbai
        </h1>
        <p data-aos="zoom-in" className="text-white text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          sequi sed placeat assumenda illum est at adipisci.
          <br /> Olor sit amet consectetur adipisicing elit. Nihil sequi sed
          placeat assumenda illum est at adipisci
        </p>
      </section>

      <div className={`${darkMode ? "bg-black" : "bg-transparent"} z-10`}>
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } w-full m-auto grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-5 p-8 rounded-2xl lg:w-[70%]`}
        >
          {/* LOCATION */}
          <div className="w-full">
            <h1 className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an address"
              className="bg-white p-1 w-full mt-2 border-b-[1px] border-gray-300 outline-none"
            />
          </div>

          {/* TYPE */}
          <div className="w-full">
            <h1 className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>
              TYPE
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              defaultValue=""
              className="bg-white p-1 border-b-[1px] w-full mt-2 border-gray-300 text-gray-500 outline-none"
            >
              <option value="" disabled>
                Select Property
              </option>
              <option value="Option1">Rentals</option>
              <option value="Option2">Sales</option>
              <option value="Option3">Commercial</option>
            </select>
          </div>

          {/* CATEGORY */}
          <div className="w-full">
            <h1 className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>
              CATEGORY
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              defaultValue=""
              className="bg-white p-1 border-b-[1px] w-full mt-2 border-gray-300 text-gray-500 outline-none"
            >
              <option value="" disabled>
                Property Category
              </option>
              <option value="Option1">Apartments</option>
              <option value="Option2">Sales</option>
              <option value="Option3">Commercial</option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="w-full">
            <button
              className={`w-full ${darkMode ? "bg-red-400 text-white" : "bg-red-500 text-black"} hover:text-white hover:bg-black text-lg p-4 font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-200 text-center`}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
