import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import EditProduct from "./EditProduct";

const UploadProduct = () => {
  const userid = useSelector((state) => state?.user?.users?.userEmail?._id);
  const userToken = useSelector((state) => state?.user?.users?.token); // Corrected token access

  const [data, setData] = useState({
    name: "",
    title: "",
    price: "",
    rating: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image file changes
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("title", data.title);
      formData.append("price", data.price);
      formData.append("rating", data.rating);
      formData.append("description", data.description);
      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post(
        "http://localhost:8000/user/add-product",
        formData,
        {
          headers: {
            userid,
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userToken}`, // Added token to the request header
          },
        }
      );

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="flex flex-col py-10 px-4">
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Upload Product</h1>
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-1">
            <label htmlFor="name" className="font-medium capitalize">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your product name"
              value={data.name}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="title" className="font-medium capitalize">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter your product title"
              value={data.title}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="price" className="font-medium capitalize">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter your product price"
              value={data.price}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="rating" className="font-medium capitalize">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="Enter your product rating"
              value={data.rating}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="description" className="font-medium capitalize">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter your product description"
              value={data.description}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Updating..." : "Upload Product"}
            </button>
          </div>
        </form>
      </div>
      <EditProduct/>
    </section>
  );
};

export default UploadProduct;
