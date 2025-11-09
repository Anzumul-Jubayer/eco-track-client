import React from "react";
import { Link, NavLink } from "react-router";
import MyContainer from "../container/MyContainer";
import logo from '../../assets/eco-track-logo-vector.jpg'
const Navbar = () => {
  const links = (
    <>
      <NavLink className="lg:mr-20">Home</NavLink>
      <NavLink className="lg:mr-20">Challenges</NavLink>
      <NavLink className="lg:mr-20">MyActivities</NavLink>
    </>
  );

  return (
    <MyContainer>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center -ml-4 ">
           <img src={logo} alt="" className="w-20" />
           <p className="text-xs md:text-xl lg:text-xl font-semibold -ml-4"> ECO<span className="text-green-600">TRACK</span> </p>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link className="border-2 px-2 py-1 rounded-2xl border-green-400 font-medium">Login</Link>
          <Link className="btn ml-2 bg-green-600 font-medium rounded-2xl">Register</Link>
        </div>
      </div>
    </MyContainer>
  );
};

export default Navbar;
