import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../store/userSlice";

const UserMenu = ({ setOpen }) => {
  const dispatch = useDispatch();
  return (
    <div className="rounded-md">
      <div className="pb-2 text-[18px]">sandip gawali</div>
      <p className="border border-gray-200"></p>
      <NavLink
        to="/dashboard/profile"
        onClick={() => setOpen((prev) => !prev)}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Profile
      </NavLink>
      <NavLink
        to="/dashboard/my-orders"
        onClick={() => setOpen((prev) => !prev)}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        My Orders
      </NavLink>
      <NavLink
        to="/dashboard/saved-address"
        onClick={() => setOpen((prev) => !prev)}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Saved Addresses
      </NavLink>
      <button
        onClick={() => dispatch(logout())}
        className="block w-full text-left px-4 cursor-pointer py-2 text-red-600 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
