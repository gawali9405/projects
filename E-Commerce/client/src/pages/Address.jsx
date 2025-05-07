import React, { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import ShowAddress from "./ShowAddress";

const Address = ({fetchData}) => {
  const user = useSelector((state) => state.user.users);
  const userId = user?.userEmail._id;
  const [data, setData] = useState({
    address: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  }); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("http://localhost:8000/user/add-address", {
        userId,
        streetAddress: data.address,
        city: data.city,
        postalCode: data.postalCode,
        state: data.state,
        country: data.country || "India",
      });
      toast.success("Address saved successfully");
      setData({
        address: "",
        city: "",
        postalCode: "",
        state: "",
        country: "",
      }); 
    await fetchData()
    } catch (error) {
      console.log("Error saving address:", error.response?.data || error.message);
      toast.error("Failed to save address");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col py-10 px-4">
      <div className="w-full max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Saved Address</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["address", "city", "postalCode", "state", "country"].map((field) => (
            <div className="grid gap-1" key={field}>
              <label htmlFor={field} className="font-medium capitalize">
                {field}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={data[field]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="border border-gray-300 rounded px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          ))}

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              {loading ? "Loading..." : "Save Address"}
            </button>
          </div>
        </form>
      </div>

      <ShowAddress fetchData={fetchData}/>
    </section>
  );
};

export default Address;
