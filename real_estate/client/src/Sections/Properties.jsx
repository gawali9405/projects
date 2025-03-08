import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import { property } from "../Components/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const Properties = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="properties"
        className="lg:w-full m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-black">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-black"
          >
            Explore the latest
          </h1>
        </div>
        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {property.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-white rounded-xl w-full"
            >
              <div
                id="image-box"
                className="bg-cover bg-center h-[250px] rounded-2xl flex flex-col justify-between items-end"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div id="top" className="flex justify-between items-end w-full">
                  <div>
                    <button className="bg-red-400 text-white px-3 py-1 hover:bg-white hover:text-black rounded-full m-3 cursor-pointer">
                      Featured
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-3">
                    <button className="bg-red-400 text-white px-3 py-1 hover:bg-white hover:text-black rounded-full m-2 cursor-pointer">
                      Sales
                    </button>

                    <button className="bg-red-400 text-white px-3 py-1 hover:bg-white hover:text-black rounded-full m-3 cursor-pointer">
                      Active
                    </button>
                  </div>
                </div>
                <div
                  id="bottom"
                  className="flex justify-between items-end w-full"
                >
                  <div className=" flex justify-center items-center gap-3 m-3 font-semibold">
                    <FaMapMarkerAlt className="size-4 text-white" />
                    <h1 className=" text-white">{item.address} </h1>
                  </div>
                  <div className="flex justify-between items-end gap-5 m-3 pr-2">
                    <FaVideo className="size-4 text-white" />
                    <FaCamera className="size-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                <h1 className="text-xl text-black font-semibold dark:text-black">
                  {item.name}{" "}
                </h1>
                <h1 className="text-2xl text-red-400 font-bold">
                  {item.price}{" "}
                </h1>
                <p className="text-gray-700">{item.about} </p>
                <div
                  id="icons"
                  className="flex justify-center items-start gap-4"
                >
                  <div className="flex flex-center items-center gap-2">
                    <FaBath className="text-red-400 size-5" />
                    <h1 className="text-black">{item.bath} </h1>
                  </div>
                  <div className="flex flex-center items-center gap-2">
                    <FaBed className="text-red-400 size-5" />
                    <h1 className="text-black">{item.bed} </h1>
                  </div>
                  <div className="flex flex-center items-center gap-2">
                    <MdSpaceDashboard className="text-red-400 size-5" />
                    <h1 className="text-black">{item.area} </h1>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-100 mt-3"></div>
                <div
                  id="owner-info"
                  className="flex justify-between items-center w-full mt-2"
                >
                  <div className="flex justify-center items-center gap-2">
                    <FaUserCircle className="size-5 text-red-400" />
                    <h1 className="text-black">{item.owner} </h1>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div className="p-2 border border-gray-200 hover:bg-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
                      <FaShareAlt className="size-4 text-red-400 outline-none " />
                    </div>
                    <div className="p-2 border border-gray-200 hover:bg-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
                      <FaHeart className="size-4 text-red-400 outline-none " />
                    </div>
                    <div className="p-2 border border-gray-200 hover:bg-black cursor-pointer transform hover:scale-105 transition-transform duration-300">
                      <FaPlus className="size-4 text-red-400 outline-none " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
