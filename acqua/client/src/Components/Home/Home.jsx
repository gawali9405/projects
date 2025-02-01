import React from "react";
import Slideshow from "../SlidShow/SlidShow";
import Products from "../Products/Products"; 
import Service from "../Service/Service";

const Home = () => {
  return (
    <>
      <div className="pt-21">
        <Slideshow />
      </div>
      <Products />
      <Service/>
    </>
  );
};

export default Home;