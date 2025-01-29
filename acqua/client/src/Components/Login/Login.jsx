import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const submit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="p-60 bg-gray-50 min-h-screen flex items-center justify-center">
      <form
        onSubmit={submit}
        className="flex flex-col p-5 bg-white rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-7">Login</h2>
        <label htmlFor="username" className="mb-2 text-lg font-medium">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="mb-10 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Enter your username"
        />
        <label htmlFor="password" className="mb-2 text-lg font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="mb-10 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Enter your password"
        />
        <div className="flex items-center mb-10">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="mr-2"
          />
          <label htmlFor="remember" className="text-lg">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition cursor-pointer"
        >
          Submit
        </button>
        <p className="mt-6 text-md text-center">
          Not a member?
          <Link to="/signup" className="text-red-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
