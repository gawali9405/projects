import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Address from "./pages/Address";
import Layout from "./component/Layout";
import Profile from "./pages/Profile";
import MyOrder from "./pages/MyOrder";
import UploadProduct from "./component/UploadProduct";
import { setAddresses } from "./store/addrssSlice.js";
import axios from "axios";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const [refresh, setRefresh] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/user/get-address"
      );
      dispatch(setAddresses(response.data.userAddress));
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cart" element={<Cart setRefresh={setRefresh} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route
            path="saved-address"
            element={<Address fetchData={fetchData} setRefresh={setRefresh} />}
          />
          <Route path="profile" element={<Profile />} />
          <Route path="upload-product" element={<UploadProduct />} />
          <Route path="my-orders" element={<MyOrder />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
