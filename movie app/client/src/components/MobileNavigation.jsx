import React from "react";
import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { BiSolidMoviePlay, BiSearch } from "react-icons/bi";

const BottomNavigation = () => {
  return (
    <div className="md:hidden flex justify-between items-center bg-gray-800 text-white p-4 fixed bottom-0 w-full">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? "text-orange-500" : "text-white"
          }`
        }
      >
        <MdHome size={24} />
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/tv-shows"
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? "text-orange-500" : "text-white"
          }`
        }
      >
        <TbDeviceTvOld size={24} />
        <p>TV Shows</p>
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? "text-orange-500" : "text-white"
          }`
        }
      >
        <BiSolidMoviePlay size={24} />
        <p>Movies</p>
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? "text-orange-500" : "text-white"
          }`
        }
      >
        <BiSearch size={24} />
        <p>Search</p>
      </NavLink>
    </div>
  );
};

export default BottomNavigation;
