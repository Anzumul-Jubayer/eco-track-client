import React from "react";
import { Link, NavLink } from "react-router";
import MyContainer from "../container/MyContainer";
import logo from '../../assets/eco-track-logo-vector-removebg-preview.png'

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="lg:mr-20 font-semibold">Home</NavLink>
      <NavLink to="/challenges" className="lg:mr-20 font-semibold">Challenges</NavLink>
      <NavLink to="/my-activities" className="lg:mr-20 font-semibold">My Activities</NavLink>
    </>
  );

  return (
    <div className="bg-green-50">
      <MyContainer>
      <div className="flex items-center">
        
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          
          <div className="flex items-center -ml-4">
            <img src={logo} alt="EcoTrack Logo" className="w-15 md:w-20 lg:w-20" />
            <p className="text-xs md:text-xl lg:text-xl font-semibold -ml-4">
              ECO<span className="text-green-600">TRACK</span>
            </p>
          </div>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        
        <div className="navbar-end">
          <Link to='/login' className="border-2 px-2 py-1 rounded-2xl border-green-400 font-semibold">Login</Link>
          <Link to='/register' className="btn ml-2 bg-green-600  rounded-2xl font-semibold">Register</Link>
        </div>
      </div>
    </MyContainer>
    </div>
    
  );
};

export default Navbar;
