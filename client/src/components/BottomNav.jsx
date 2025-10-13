// MobileBottomNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaPlusCircle, FaPalette } from "react-icons/fa";
import profilePic from "../assets/mypic.jpg";

const navItems = [
  { label: "Home", icon: FaHome, href: "/" },
  { label: "Explore", icon: FaSearch, href: "/explore" },
  { label: "Upload", icon: FaPlusCircle, href: "/upload" },
  { label: "Challenge", icon: FaPalette, href: "/challange" },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-white backdrop-blur-sm flex justify-around items-center z-50 shadow-t">
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="relative group flex flex-col items-center">
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `text-2xl transition-transform duration-200 transform hover:scale-110 ${
                  isActive ? "text-[var(--primary)]" : "text-gray-700 hover:text-[var(--primary)]"
                }`
              }
            >
              <Icon />
            </NavLink>
            {/* Tooltip label */}
            <span className="absolute bottom-full mb-1 px-2 py-1 text-xs rounded bg-[var(--dark)] text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200">
              {item.label}
            </span>
          </div>
        );
      })}

      {/* Profile */}
      <div className="relative group flex flex-col items-center">
        <NavLink to="/profile/:id">
          <img
            src={profilePic}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-2 border-[var(--primary)]"
          />
        </NavLink>
        {/* Tooltip label */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs rounded bg-[var(--dark)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {navItems.label}
                </span>
      </div>
    </nav>
  );
};

export default BottomNav;
