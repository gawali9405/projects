import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg1 from "../assets/images/aboutimg1.jpg";

const About = () => {
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
    <section
      className={`${
        darkMode
          ? "dark bg-black text-white"
          : "light bg-transparent text-black"
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutimg1}
          alt="About Image"
          className="rounded-2xl lg:w-[500px] lg:h-[600px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className="text-red-500">
          WHO WE ARE
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black font-semibold text-[40px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-xl text-gray-500 font-semibold text-justify"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse
          corrupti et at perferendis impedit ea ullam architecto placeat
          officiis sit voluptatibus dolorum aliquam veniam!
        </p>
        <button
          data-aos="zoom-in"
          className="bg-red-500 hover:text-white hover:bg-black dark:bg-red-400 text-lg p-4 text-black font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-200 text-center"
        >
          Read More...
        </button>
      </div>
    </section>
  );
};

export default About;
