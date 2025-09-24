// SideNav.jsx
import React from "react";
import logo from "../assets/logo.png"; 
import { NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaSearch, 
  FaPlusCircle, 
  FaTrophy, 
  FaRobot, 
  FaCog
} from "react-icons/fa";

const topNavItems = [
  { label: "Home", icon: FaHome, href: "/home" },
  { label: "Explore", icon: FaSearch, href: "/explore" },
  { label: "Upload", icon: FaPlusCircle, href: "/upload" },
  { label: "Challenge", icon: FaTrophy, href: "/challange" },
  { label: "AI Assistant", icon: FaRobot, href: "/aichatbot" },
];

const bottomNavItem = { label: "Setting", icon: FaCog, href: "/setting" };

const SideNav = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-40 bg-white backdrop-blur-sm flex flex-col justify-between py-3 z-50 ">
      {/* Logo + Top Nav */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-28 h-20 mb-20" />

        {/* Top Nav Items */}
        <ul className="flex flex-col items-center gap-10">
          {topNavItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={idx} className="relative group w-full flex justify-center">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `flex flex-col items-center text-2xl transition-transform duration-200 transform group-hover:scale-110 
                     ${isActive ? "text-[var(--primary)]" : "text-gray-700 hover:text-[var(--primary)]"}`
                  }
                >
                  <Icon />
                </NavLink>
                {/* Tooltip */}
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs rounded bg-[var(--dark)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Nav Item (Setting) */}
      {/* Bottom Nav Item (Setting) */}
<div className="flex flex-col items-center mb-10 relative group">
  <NavLink
    to={bottomNavItem.href}
    className={({ isActive }) =>
      `flex flex-col items-center text-2xl mb-4 transition-transform duration-200 transform hover:scale-110 
       ${isActive ? "text-[var(--primary)]" : "text-gray-700 hover:text-[var(--primary)]"}`
    }
  >
    <bottomNavItem.icon />
  </NavLink>

  {/* Tooltip */}
  <span className="absolute left-23 top-1/3 -translate-y-1/2 ml-2 px-2 py-1 text-xs rounded bg-[var(--dark)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
    {bottomNavItem.label}
  </span>
</div>

    </nav>
  );
};

export default SideNav;
