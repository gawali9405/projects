import React, { useState } from "react";
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

    // Basic validation
    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      return alert("All fields are required");
    }

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      return alert("Enter a valid email address");
    }

    if (user.password.length < 6) {
      return alert("Password must be at least 6 characters long");
    }

    if (user.password !== user.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const response = await axios.post("http://localhost:8000/registration", user);
      console.log(response.data);
      alert("Registration Successful");

      setUser({ name: "", email: "", password: "", confirmPassword: "" });
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        {/* Name Input */}
        <label className="block text-lg font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your name"
        />

        {/* Email Input */}
        <label className="block text-lg font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your email"
        />

        {/* Password Input */}
        <label className="block text-lg font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your password"
        />

        {/* Confirm Password Input */}
        <label className="block text-lg font-medium mb-1">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Confirm your password"
        />

        {/* Remember Me Checkbox */}
        <div className="flex items-center mb-6">
          <input type="checkbox" id="remember" className="mr-2 cursor-pointer" />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
