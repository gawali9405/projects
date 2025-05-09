import React from "react";

const Header = ({ data, setFilterData, setSelectBtn }) => {
  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue === "") {
      setFilterData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  const filterFood = (type) => {
    if (type == "all") {
      setFilterData(data);
      setSelectBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <>
      <header className=" flex flex-col md:flex-row justify-between items-center bg-gray-700 text-white p-5">
        <div className="logo text-3xl font-bold">
          <h1>FOODZONE</h1>
        </div>
        <div className="search border rounded-lg md:w-auto mt-3 md:mt-0">
          <input
            type="search"
            onChange={searchFood}
            placeholder="Search Here..."
            className="text-white w-full md:w-64 p-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </header>
      <div className="bg-gray-700 text-white text-center">
        {filterBtns.map((value, index) => (
          <button
            key={index}
            onClick={() => filterFood(value.type)}
            className="bg-orange-500 p-2 mr-5 rounded-md cursor-pointer"
          >
            {value.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
