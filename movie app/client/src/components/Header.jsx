import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import userLogo from "../assets/userLogo.jpeg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/search?q=${searchInput}`);
  }, [searchInput, navigate]);

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600/70">
      <div className="container mx-auto p-2 flex items-center h-full">
       <Link to={"/"}>
       <img src={logo} alt="logo" width={80} />
       </Link>

        <nav className=" hidden md:flex items-center text-white font-semibold gap-3 px-4">
          <NavLink
            to="/tv"
            className={({ isActive }) => `
              hover:text-orange-300 transition duration-300
              ${isActive ? "text-orange-400" : "text-white"}
            `}
          >
            TV Shows
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => `
              hover:text-orange-300 transition duration-300
              ${isActive ? "text-orange-400" : "text-white"}
            `}
          >
            Movies
          </NavLink>
        </nav>

        <div className="ml-auto flex gap-4 items-center">
          <form onSubmit={handleSubmit} className="flex items-center gap-1">
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              value={searchInput}
              placeholder="Search here..."
              className="outline-none px-1 text-white border-b border-neutral-400 bg-transparent"
            />
            <button className="text-white cursor-pointer">
              <IoSearchOutline size={20} />
            </button>
          </form>

          <div className="active:scale-50 transition-all">
            <img
              src={userLogo}
              alt="user logo"
              width={30}
              className="rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
