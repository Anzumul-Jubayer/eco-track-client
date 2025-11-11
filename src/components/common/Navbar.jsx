import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/eco-track-logo-vector-removebg-preview.png";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-hot-toast";
import MyContainer from "../container/MyContainer";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const { user, signOutFunc, setUser, loading } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to="/" className="lg:mr-10 font-semibold">
        Home
      </NavLink>
      <NavLink to="/challenges" className="lg:mr-10 font-semibold">
        Challenges
      </NavLink>
      <NavLink to="/my-activities" className="lg:mr-10 font-semibold">
        My Activities
      </NavLink>
      <NavLink to="/challenges-add" className="lg:mr-10 font-semibold">
        Add Challenge
      </NavLink>
    </>
  );

  const handleLogout = () => {
    signOutFunc()
      .then(() => {
        setUser(null); 
        toast.success("SignOut Successful");
      })
      .catch((error) => toast.error(error.code));
  };

  return (
    <div className="bg-green-50">
      <MyContainer>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>

            {/* Logo */}
            <div className="flex items-center ml-2">
              <img src={logo} alt="EcoTrack Logo" className="w-16 md:w-20" />
              <p className="text-xs md:text-xl font-semibold ml-2">
                ECO<span className="text-green-600">TRACK</span>
              </p>
            </div>
          </div>

          <div className="hidden lg:flex">{links}</div>

          <div className="flex items-center gap-2">
            {loading?<span className="loading loading-ring loading-xl"></span>:user ? (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar relative"
                >
                  <div className="w-10 rounded-full">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="User Avatar" />
                    ) : (
                      <div className="text-3xl text-green-600 flex justify-center items-center">
                        {user.displayName?.[0] || "U"}
                      </div>
                    )}
                  </div>
                  {loading && (
                    <span className="loading loading-spinner loading-sm absolute top-0 right-0"></span>
                  )}
                </label>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3">
                  <li>
                    <span className="font-semibold text-green-500">
                      {user.displayName || "User"}
                    </span>
                  </li>
                  <li>
                    <Link to="/profile" className=" text-green-400">Profile</Link>
                  </li>
                  <li>
                    <Link to="/my-activities" className=" text-green-400">My Activities</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left text-green-400"
                      disabled={loading}
                    >
                     
                      Logout <TbLogout2 />
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="py-2 px-3 rounded-2xl border-green-400 font-semibold bg-green-300 text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="py-2 px-3 btn bg-green-600 rounded-2xl font-semibold text-white"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
