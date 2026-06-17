import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import  LogOutButton  from "../component/Button/LogOutButton";




const Navbar = () => {
  const navItem =
    "flex items-center justify-center rounded-xl p-3 transition-all duration-200";
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT: LOGO & SEARCH */}
        <div className="flex items-center gap-6">
          <Link
            to="/home"
            className="text-xl sm:text-2xl font-black tracking-tight"
          >
            Face<span className="text-sky-600">Hook</span>
          </Link>
        </div>

        {/* RIGHT: NAVIGATION LINKS & PROFILE */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Home Icon */}
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${navItem} ${isActive
                ? "bg-sky-50 text-sky-600"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <IoMdHome className="h-5 w-5" />
              <span className="hidden md:block font-medium">
                Home
              </span>
            </div>
          </NavLink>
          {/* Notifications Icon */}
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              `${navItem} relative ${isActive
                ? "bg-sky-50 text-sky-600"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            <IoIosNotifications className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
          </NavLink>

          <LogOutButton/>


          {/* Avatar container */}
          <div className="flex items-center gap-3 pl-1">
            <p className="hidden sm:block text-sm font-medium text-slate-700">
              Ibrahim
            </p>

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User profile"
              className="h-10 w-10 rounded-xl object-cover border border-slate-200 hover:border-sky-500 transition"
            />
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;