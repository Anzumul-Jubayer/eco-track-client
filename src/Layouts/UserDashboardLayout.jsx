import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { HiMenuAlt2, HiX } from "react-icons/hi";

const UserDashboardLayout = () => {
  const { user, signOutFunc, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    signOutFunc()
      .then(() => {
        setUser(null);
        toast.success("SignOut Successful");
        navigate("/login");
      })
      .catch((error) => toast.error(error.code));
  };

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg ${
      isActive ? "bg-green-500" : "hover:bg-green-600"
    }`;

  return (
    <div className="min-h-screen flex bg-linear-to-br from-green-50 to-emerald-100">
      
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      
      <aside
        className={`fixed md:static z-50 w-64 bg-green-700 text-white min-h-screen transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-4 text-2xl font-bold border-b border-green-600 flex justify-between items-center">
          <Link to="/">EcoTrack</Link>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-white"
          >
            <HiX size={24} />
          </button>
        </div>

        <nav className="mt-6 space-y-2 px-4">
          <NavLink to="/dashboard" end className={navLinkClass}>
            OverView
          </NavLink>
          <NavLink to="/dashboard/profile" className={navLinkClass}>
            Profile
          </NavLink>
          <NavLink to="/dashboard/my-activities" className={navLinkClass}>
            My Activities
          </NavLink>
          <NavLink to="/dashboard/challenges-add" className={navLinkClass}>
            Add Challenge
          </NavLink>
        </nav>
      </aside>

      
      <div className="flex-1 flex flex-col">
        
        <header className="bg-white shadow px-4 md:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-green-700"
            >
              <HiMenuAlt2 size={26} />
            </button>
            <h1 className="text-lg md:text-xl font-semibold text-green-700">
              User Dashboard
            </h1>
          </div>

          
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-9 h-9 rounded-full border"
              />
              <span className="hidden sm:block font-medium text-green-700">
                {user?.displayName}
              </span>
            </div>

            <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-green-500"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
