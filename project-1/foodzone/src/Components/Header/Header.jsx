import React from 'react';

const Header = () => {
  return (
    <header className=" flex flex-col md:flex-row justify-between items-center bg-gray-700 text-white p-5">
      <div className="logo text-3xl font-bold">
        <h1>FOODZONE</h1>
      </div>
      <div className="search border rounded-lg md:w-auto mt-3 md:mt-0">
        <input
          type="search"
          placeholder="Search Here..."
          className="text-white w-full md:w-64 p-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
    </header>
  );
};

export default Header;