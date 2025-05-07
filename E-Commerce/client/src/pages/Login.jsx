import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
     const response =  await axios.post("http://localhost:8000/user/sign-in", data);
      toast.success("User Login successfully");
      setData({ email: "", password: "" });
      dispatch(addUser(response.data.data));
      localStorage.setItem("token",response.data.data.token );

      navigate("/");
    } catch (error) {
      console.log(error);
      const message =
        error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh] bg-gray-100 flex items-center justify-center">
      <div className="shadow-md p-6 w-full max-w-md bg-white rounded-md">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Login..." : "Login"}
          </button>
          <p className="py-3 px-1">
            Don't have an account?{" "}
            <Link
              to={"/registration"}
              className="text-red-500 hover:text-green-800"
            >
              Registraion
            </Link>{" "}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
