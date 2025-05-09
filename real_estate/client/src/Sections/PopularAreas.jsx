import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
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
        className={`${
          darkMode ? "dark bg-gray-700" : "light bg-red-100"
        }  w-full h-fit m-auto rounded-2xl justify-center items-center lg-px-20 px-6 py-20 gap-20`}
      >
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1 data-aos="zoom-in" className=" text-red-500 dark:text-red">
              POPULAR AREAS
            </h1>
            <h1 data-aos="zoom-in" className=" text-5xl font-semibold pt-3">
              Explore Most <br /> Popular Areas{" "}
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area1})` }}
              className="h-[400px] bg-cover,bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area2})` }}
              className="h-[400px] bg-cover,bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area3})` }}
              className="h-[400px] bg-cover,bg-center rounded-xl"
            ></div>
          </div>
        </div>
        <div
            id="bottom"
            className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6 mt-7"
          >
            <div
              data-aos="slide-up"
              data-aos-delay="200"
              className="flex justify-center lg:items-center gap-8 w-full"
            >
              <h1 className="text-black text-7xl font-semibold dark:text-gray-600">
                5K
              </h1>
              <h1>
                ACTIVE <br />
                LISTINGS
              </h1>
            </div>
            <div
              data-aos="slide-up"
              data-aos-delay="200"
              className="flex justify-center lg:items-center gap-8 w-full"
            >
              <h1 className="text-black text-7xl font-semibold dark:text-gray-600">
                5K
              </h1>
              <h1>
                ACTIVE <br />
                LISTINGS
              </h1>
            </div>
            <div
              data-aos="slide-up"
              data-aos-delay="200"
              className="flex justify-center lg:items-center gap-8 w-full"
            >
              <h1 className="text-black text-7xl font-semibold dark:text-gray-600">
                5K
              </h1>
              <h1>
                ACTIVE <br />
                LISTINGS
              </h1>
            </div>
          </div>
      </section>
    </div>
  );
};

export default PopularAreas;
