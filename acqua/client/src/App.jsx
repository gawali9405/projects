import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact"; 
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import Registration from "./Components/Registration/Registration";
import Cart from "./Components/Cart/Cart";  // Cart component import

const App = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]); // Cart state to hold the items

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to the cart
    setCount((prev) => prev + 1); // Update the cart count
  };

  const removeFromCart = (index)=>{
    setCart((prevCart) => prevCart.filter((_, i) => i !== index)); 
  }

  return (
    <>
      <Header count={count} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />  {/* Cart route */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
