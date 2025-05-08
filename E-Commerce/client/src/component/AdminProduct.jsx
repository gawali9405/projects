import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const AdminProduct = ({ product, onClose }) => {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [editProduct, setEditProduct] = useState({
    name: "",
    title: "",
    price: "",
    rating: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setEditProduct({
        name: product.name || "",
        title: product.title || "",
        price: product.price || "",
        rating: product.rating || "",
        description: product.description || "",
      });
      setPreview(product.image || null);
    }
  }, [product]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", editProduct.name);
      formData.append("title", editProduct.title);
      formData.append("price", editProduct.price);
      formData.append("rating", editProduct.rating);
      formData.append("description", editProduct.description);
      if (image) {
        formData.append("image", image);
      }

      const token = localStorage.getItem("token");

      if (product?._id) {
        // Update product
        await axios.put(
          `http://localhost:8000/user/update-product/${product._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Product updated successfully!");
      } 
      setEditProduct({
        name: "",
        title: "",
        price: "",
        rating: "",
        description: "",
      });
      setPreview(null);
      setImage(null);
      if (onClose) onClose();
    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("Failed to upload product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="absolute rounded-sm  top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-neutral-900/60">
      <div className="w-full max-w-xl mx-auto bg-white px-5 py-1">
        <h1 className="text-2xl font-bold text-center mb-6">
          {product ? "Edit Product" : "Upload Product"}
        </h1>
        <div className="w-fit mx-auto text-center">
          {preview ? (
            <div className="mb-4">
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <label
                htmlFor="image"
                className="bg-gray-600 text-white rounded-md px-2 py-1 mt-2 inline-block cursor-pointer"
              >
                Change Product
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>
            </div>
          ) : (
            <div className="flex flex-col items-center mb-4 text-gray-400">
              <FaUserCircle size={96} />
              <label
                htmlFor="image"
                className="bg-gray-600 text-white rounded-md px-2 py-1 mt-2 inline-block cursor-pointer"
              >
                Upload Product
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmitProduct} className="space-y-4">
          {["name", "title", "price", "rating", "description"].map((field) => (
            <div key={field} className="grid gap-1">
              <label htmlFor={field} className="font-medium capitalize">
                {field}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                placeholder={`Enter your product ${field}`}
                value={editProduct[field]}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
          ))}

          <div className="pt-4 flex justify-between items-center gap-3">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
              disabled={loading}
            >
              {loading
                ? product
                  ? "Updating..."
                  : "Uploading..."
                : product
                ? "Update Product"
                : "Upload Product"}
            </button>
            <button
            onClick={()=>onClose()}
            className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition duration-200"
            
            >Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminProduct;
