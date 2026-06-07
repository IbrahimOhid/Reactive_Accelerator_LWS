import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6">
        
        {/* LEFT: LOGO & SEARCH */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-black tracking-tight text-slate-900 transition-opacity hover:opacity-90">
            Social<span className="text-sky-600">Connect</span>
          </Link>
          
          <div className="relative hidden md:block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search SocialConnect..."
              className="w-64 rounded-full border border-slate-100 bg-slate-50/50 py-2 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-sky-500/50 focus:bg-white focus:ring-4 focus:ring-sky-500/5"
            />
          </div>
        </div>

        {/* RIGHT: NAVIGATION LINKS & PROFILE */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Home Icon */}
          <NavLink 
            to="/" 
            className={({ isActive }) => `p-2.5 rounded-xl transition-colors cursor-pointer ${isActive ? 'text-sky-600 bg-sky-50/60' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </NavLink>

          {/* Friends Icon */}
          <NavLink 
            to="/friends" 
            className={({ isActive }) => `p-2.5 rounded-xl transition-colors cursor-pointer ${isActive ? 'text-sky-600 bg-sky-50/60' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </NavLink>

          {/* Watch / TV Icon */}
          <NavLink 
            to="/watch" 
            className={({ isActive }) => `p-2.5 rounded-xl transition-colors cursor-pointer ${isActive ? 'text-sky-600 bg-sky-50/60' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
              <polyline points="17 2 12 7 7 2"/>
            </svg>
          </NavLink>

          {/* Notifications Icon */}
          <NavLink 
            to="/notifications" 
            className={({ isActive }) => `p-2.5 rounded-xl transition-colors cursor-pointer relative ${isActive ? 'text-sky-600 bg-sky-50/60' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
          </NavLink>

          {/* Divider */}
          <span className="h-5 w-px bg-slate-200 mx-1 hidden sm:block" />

          {/* Avatar container */}
          <div className="relative pl-1">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User profile"
              className="h-9 w-9 rounded-xl object-cover cursor-pointer border border-slate-200 transition-transform active:scale-95 hover:border-sky-500"
            />
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;