import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-black" : "light bg-red-100"
        } w-full m-auto rounded-2xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white flex flex-col justify-center items-start gap-4 rounded-2xl p-10"
        >
          <h1 className="text-2xl font-semibold">Send us a message today</h1>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-full rounded-2xl px-6 py-3 border-2 border-gray-200"
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full rounded-2xl px-6 py-3 border-2 border-gray-200"
          />
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full rounded-2xl px-6 py-3 border-2 border-gray-200"
          />
          <textarea
            cols={25}
            rows={5}
            placeholder=" Enter your message here"
            className="w-full rounded-2xl px-6 py-3 border-2 border-gray-200"
          ></textarea>
          <button className="bg-red-500 w-full text-md px-8 py-3 font-semibold rounded-2xl cursor-pointer hover:text-white hover:bg-black">
            SEND EMAIL
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1 data-aos="zoom-in" data-aos-delay="400" className="text-red-500">
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[40px] font-semibold"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            laborum et incidunt minus.
          </h1>
          <p  data-aos="zoom-in"
            data-aos-delay="400" className="text-xl text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex aut omnis fugiat veritatis quas autem quos. Nobis alias minima rem, amet eaque magni iusto
            delectus? soluta consequuntur esse dicta hic quam sequi fuga, tempora assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iste.</p>
          <button  data-aos="zoom-in"
            data-aos-delay="400" className="bg-red-500   text-md px-8 py-3 font-semibold rounded-2xl cursor-pointer hover:text-white hover:bg-black">
            SEND EMAIL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
