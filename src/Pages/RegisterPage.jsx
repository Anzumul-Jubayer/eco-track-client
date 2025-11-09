import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-100 to-green-200 px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-lg rounded-2xl p-8 border border-green-100">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">Join EcoTrack</h1>
          <p className="text-gray-500 text-sm mt-2">
            Start your sustainable journey today 🌿
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full rounded-xl border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full rounded-xl border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Photo URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full rounded-xl border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••"
              className="input input-bordered w-full rounded-xl border-green-200 focus:border-green-400 focus:ring-2 focus:ring-green-200"
            />
          </div>

          <button
            type="button"
            className="btn w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition"
          >
            Register
          </button>

          <div className="divider text-gray-400 text-sm">OR</div>

          <button
            type="button"
            className="btn w-full border border-green-300 bg-white hover:bg-green-50 text-gray-700 rounded-xl flex items-center justify-center gap-2"
          >
            <FcGoogle size={22} /> Continue with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-700 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
