import React, { useEffect } from "react";
import { service } from "../Components/export";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="services"
        className={`${
          darkMode ? "dark bg-black" : "light bg-red-100"
        } lg:w-full w-full h-fit m-auto rounded-2xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-green">
            OUR SERVICES{" "}
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold"
          >
            {" "}
            Top real estate <br /> services available{" "}
          </h1>
        </div>
        <div
          id="service-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {service.map((item, index) => (
            <div
              key={index}
              className="bg-white h-[350px] dark:bg-white px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-2xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200">
                <item.icon className="text-red-600 size-10 transform hover:scale-105 transition-transform duration-200 cursor-pointer" />
              </div>
              <h1 className="text-black text-[22px] font-semibold dark:text-black">
                {item.title}
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-700">
                {item.desc}
              </p>
              <button className="text-red-500 font-semibold hover:text-red-800 cursor-pointer ">
                Read More...
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
