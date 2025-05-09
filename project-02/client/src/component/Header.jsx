import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import UserMenu from "./UserMenu";

const Header = () => {
  const user = useSelector((state) => state.user.users);
  const role = user?.userEmail?.role || "";
  const cart = useSelector((state) => state.cart.cartItems);
  const cartCount = cart.length;
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-16 px-15 bg-white shadow-md">
      {/* Logo */}
      <div className="font-bold text-xl">
        <Link to="/">LOGO</Link>
      </div>

      {/* Search Bar */}
      <form className="hidden md:flex items-center border border-slate-300 px-2 rounded-md">
        <CgSearch size={20} className="text-slate-500" />
        <input
          type="search"
          placeholder="Search here..."
          className="outline-none py-1 px-3 w-[320px]"
        />
      </form>

      {/* Navigation Links */}
      <nav className="flex gap-4 items-center">
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : "text-gray-600"
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${
              isActive ? "text-green-600 font-semibold" : "text-gray-600"
            } flex gap-1 items-center relative`
          }
        >
          <FaCartShopping size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-red-500 w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </NavLink>

        {!role ? (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "text-gray-600"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : "text-gray-600"
              }
            >
              Registration
            </NavLink>
          </>
        ) : (
          <div>
            {open && (
              <div className="absolute right-14 top-16">
                <div className="bg-white rounded p-4 min-w-52 md:shadow-lg">
                  <UserMenu setOpen={setOpen}/>
                </div>
              </div>
            )}
            <button onClick={() => setOpen((prev) => !prev)}>
              <FaUserCircle
                size={22}
                className="text-gray-600 hover:text-green-600"
              />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
