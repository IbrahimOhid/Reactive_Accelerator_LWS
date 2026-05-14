import React, { useState } from "react";

// react icons
import { AiOutlineFire } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const carts = useSelector((state) => state.carts);
  console.log(carts);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 ring-1 ring-sky-500/20">
            <span className="text-lg font-black text-sky-600">T</span>
          </div>

          <div>
            <h1 className="text-base font-black tracking-wide text-slate-900 sm:text-lg">
              Today Need
            </h1>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden items-center gap-8 lg:flex">
          <Link
            to={"/home"}
            className="group flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:text-sky-600"
          >
            <AiOutlineFire className="text-[20px] transition-all duration-300 group-hover:scale-110 group-hover:text-sky-600" />
            Home
          </Link>

          <Link
            to={"/product"}
            className="group flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:text-sky-600"
          >
            <BiSupport className="text-[20px] transition-all duration-300 group-hover:scale-110 group-hover:text-sky-600" />
            Products
          </Link>
          <Link
            to={"/addProduct"}
            className="group flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:text-sky-600"
          >
            <BiSupport className="text-[20px] transition-all duration-300 group-hover:scale-110 group-hover:text-sky-600" />
            Add Product
          </Link>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* CART */}
          <Link
            to={"/cart-product"}
            className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-50 hover:shadow-sm"
          >
            <IoCartOutline className="text-[22px] text-slate-600 transition-all duration-300 group-hover:scale-110 group-hover:text-sky-600" />

            {/* badge */}
            <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-sky-600 px-1 text-[10px] font-bold text-white shadow-lg shadow-sky-500/20">
              {carts.length ? carts.length : 0}
            </span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-50 hover:text-sky-600 lg:hidden"
          >
            {mobileSidebarOpen ? (
              <RxCross2 className="text-[24px]" />
            ) : (
              <CiMenuFries className="text-[24px]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <aside
        className={`absolute left-0 top-[73px] w-full border-b border-slate-100 bg-white/95 backdrop-blur-2xl shadow-xl transition-all duration-300 lg:hidden ${
          mobileSidebarOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:px-6">
          {/* HOME */}
          <Link
            to={"/home"}
            className="flex items-center gap-3 rounded-2xl border border-transparent bg-slate-50 px-4 py-4 text-left text-sm font-medium text-slate-700 transition-all duration-300 hover:border-sky-500/30 hover:bg-white hover:shadow-md"
          >
            <AiOutlineFire className="text-[22px] text-sky-600" />
            Home
          </Link>

          {/* PRODUCTS */}
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
            <Link
              to={"/product"}
              className="flex w-full items-center justify-between px-4 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-white"
            >
              <div className="flex items-center gap-3">
                <BiSupport className="text-[22px] text-sky-600" />
                Products
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
