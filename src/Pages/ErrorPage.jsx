import React from "react";
import { Link } from "react-router";
import errorImg from '../assets/404-Page-Blog-Cover.png'; 

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a111f] text-gray-200 px-4">
      
      <img
        src={errorImg}
        alt="404 Not Found"
        className="w-64 md:w-96 mb-8"
      />

      <h1 className="text-6xl md:text-8xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-green-400 hover:bg-green-500 text-[#0a111f] font-semibold px-6 py-3 rounded-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
