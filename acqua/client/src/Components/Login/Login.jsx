import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!user.username || !user.password) {
      return alert("Both fields are required");
    }

    if (user.password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    // Simulated login (Replace with actual authentication logic)
    alert("Login Successful");

    // Reset form
    setUser({ username: "", password: "" });

    // Redirect after login
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* Username Input */}
        <label className="block text-lg font-medium mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your username"
        />

        {/* Password Input */}
        <label className="block text-lg font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your password"
        />

        {/* Remember Me Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="remember"
            className="mr-2 cursor-pointer"
          />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-200"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="mt-6 text-sm text-center">
          Not a member?{" "}
          <span
            onClick={() => navigate("/registration")}
            className="text-red-600 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
