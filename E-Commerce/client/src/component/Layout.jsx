import React from "react";
import { Link, Outlet } from "react-router-dom";
import {logout} from "../store/userSlice.js"
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch= useDispatch()
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside className="w-[300px] bg-white py-20 px-15 flex-shrink-0 border-r border-gray-300 h-full overflow-y-auto ">
        <h1 className="text-lg font-bold mb-4">Sandip Gawali</h1>
        <div className="border-b mb-4"></div>
        <nav className="flex flex-col gap-2 text-[16px]">
          <Link to="/dashboard/profile" className="hover:text-green-600">Profile</Link>
          <Link to="/dashboard/upload-product" className="hover:text-green-600">Upload Product</Link>
          <Link to="/dashboard/my-orders" className="hover:text-green-600">My Order</Link>
          <Link to="/dashboard/saved-address" className="hover:text-green-600">Saved Address</Link>
          <button 
          onClick={()=>dispatch(logout())}
          className="text-left text-red-500 hover:text-red-700 mt-2">Logout</button>
        </nav>
      </aside>

      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto py-20 px-20 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
