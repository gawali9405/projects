import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Registration = () => {
    const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      return alert("Password does not match");
    }

    try {
      const response = await axios.post( "http://localhost:8000/registration", user);
      console.log(response.data);

      alert("Registration Successful");
      setUser({ name: "", email: "", password: "", confirmPassword: "" });
        navigate("/login");
    } catch (error) {
      console.log(error);
    }

    
    
  };
  return (
    <div className="p-50  bg-gray-50 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col min-w-120 p-5 bg-white rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-7">CREATE ACCOUNT</h2>
        <label htmlFor="username" className="mb-2 text-lg font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
          className="mb-7 p-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Enter your username"
        />
        <label htmlFor="username" className="mb-2 text-lg font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          className="mb-7 p-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Enter your username"
        />
        <label htmlFor="password" className="mb-2 text-lg font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
          className="mb-7 p-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Enter your password"
        />
        <label htmlFor="password" className="mb-2 text-lg font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          required
          className="mb-7 p-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Enter your password"
        />
        <div className="flex items-center mb-10">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="mr-2 cursor-pointer"
          />
          <label htmlFor="remember" className="text-sm ">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
