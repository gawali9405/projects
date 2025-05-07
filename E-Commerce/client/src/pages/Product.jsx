import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCartShopping } from "react-icons/fa6";
import { MdFlashOn } from "react-icons/md"; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../store/cartSlice";
import { setProducts } from "../store/productSlice";
import toast from "react-hot-toast";

const Product = () => { 
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products) 
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/user/get-product"
        ); 
        dispatch(setProducts(response.data.data))
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = (item)=>{
    dispatch(addToCart(item))
    toast.success("Add to cart successfully")
  }

  return (
    <section className="bg-gray-100">
      <div className="py-25 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(data) &&
          products.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h1 className="text-lg font-semibold">{item.name}</h1>
              <p className="text-sm text-gray-600">{item.title}</p>
              <p className="text-gray-700 text-sm mt-1">{item.description}</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-green-600 font-bold">₹{item.price}</p>
                <p className="text-yellow-500">⭐ {item.rating}</p>
              </div>
              <div className="flex justify-between items-center pt-2 gap-3">
                <button
                onClick={()=>handleAddToCart(item)}
                className="bg-orange-400 rounded text-white font-bold hover:bg-orange-600 transition duration-300 cursor-pointer px-2 py-2 w-full flex gap-2 justify-center items-center">
                <FaCartShopping size={18} />  ADD TO CART
                </button>
                <button className="bg-red-500 rounded text-white font-bold hover:bg-red-600 transition duration-300 cursor-pointer px-1  py-2 w-full flex gap-2 justify-center items-center">
                <MdFlashOn size={18} /> BUY NOW
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Product;
