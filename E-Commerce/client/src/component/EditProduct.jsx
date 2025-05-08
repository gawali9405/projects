import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/productSlice.js";
import toast from "react-hot-toast";
import AdminProduct from "./AdminProduct.jsx";

const EditProduct = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8000/user/delete-product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(removeProduct({ id }));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product.");
    }
  };

  return (
    <section className="pt-10">
      <div>
        {products.length === 0 ? (
          <p className="text-gray-600 text-center">No products found.</p>
        ) : (
          <div className="gap-4">
            {products.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border border-gray-500 my-2 items-center gap-2 px-3 bg-blue-50"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded my-2"
                />
                <p className="text-lg font-semibold mb-2">{item.name}</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-1 rounded transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1 rounded transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {editMode && (
        <AdminProduct
          product={selectedProduct}
          onClose={() => {
            setEditMode(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </section>
  );
};

export default EditProduct;
