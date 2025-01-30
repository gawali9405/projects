import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import Registration from "./Components/Registration/Registration";

const App = () => {
 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
