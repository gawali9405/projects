import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username:"",password:""})
  };
  
  return (
    <div className="p-30 bg-gray-50 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col min-w-120 p-5 bg-white rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-7">Login</h2>
        <label htmlFor="username" className="mb-2 text-lg font-medium">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          className="mb-10 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
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
          className="mb-10 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Enter your password"
        />
        <div className="flex items-center mb-10">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="mr-2 cursor-pointer"
          />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition cursor-pointer"
        >
          Submit
        </button>
        <p className="mt-6 text-sm text-center ">
          Not a member?
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
