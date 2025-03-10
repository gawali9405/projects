import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Auth/Register";
import Login from './Pages/Auth/Login.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
};

export default App;
