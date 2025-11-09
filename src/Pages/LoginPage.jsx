import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-100 to-green-200 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Login to <span className="text-green-500">EcoTrack</span>
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type={show?'text':'password'}
              
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <span onClick={() => setShow(!show)} >
              {show ? (
                <FaRegEye className="absolute top-11 right-8" />
              ) : (
                <FaRegEyeSlash className="absolute top-11 right-8" />
              )}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all"
          >
            Login
          </button>
        </form>
        <div className="my-2">
          <Link to="/forgot-password" className="link link-hover text-gray-400">
            Forgot password?
          </Link>
        </div>
        <div className="divider text-gray-500 text-sm">OR</div>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
          <FcGoogle size={22} /> Continue with Google
        </button>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
