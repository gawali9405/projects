import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectBtn, setSelectBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const res = await axios.get("http://localhost:8000");
        setData(res.data);
        setFilterData(res.data);
      } catch (error) {
        console.log("something went wrong");
      }
    };
    fetchFoodData();
  }, []);

  return (
    <div>
      <Header data={data} setFilterData={setFilterData} setSelectBtn={setSelectBtn} />
      <Main data={filterData} /> {/* Pass data to Main component */}
    </div>
  );
};

export default App;
