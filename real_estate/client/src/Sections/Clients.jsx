import React, { useEffect } from "react";
import { client } from "../Components/export";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const Clients = () => {
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
        id="testimonials"
        className="w-full h-fit m-auto bg-cover bg-center rounded-2xl flex justify-center flex-col items-start px-6 py-20 gap-20 lg:px-20"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 ">
            OUR CLIENTS
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold "
          >
            {" "}
            What our clients <br /> saying about us{" "}
          </h1>
        </div>
        <div
          id="clients-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full"
        >
          {client.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-white p-12 flex-col justify-center items-center gap-6 rounded-2xl"
            >
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src={item.image}
                  alt="client image"
                  className="w-[70px] transform hover:scale-110 transition-transform duration-200 rounded-full"
                />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-xl text-black font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="text-slate-600">{item.text}</h1>
                </div>
              </div>
              <div className="text-yellow-500 text-2xl">
                {item.feedback}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
