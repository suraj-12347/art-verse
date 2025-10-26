import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaPlusCircle,
  FaPalette,
  FaRobot,
  FaCog,
  FaBell,
} from "react-icons/fa";
import NotificationsDropdown from "../components/NotificationsDropdown";
import SettingsDropdown from "../components/SettingsDropdown"; // import dropdown
import { notifications } from "../assets/data";

const topNavItems = [
  { label: "Home", icon: FaHome, href: "/home" },
  { label: "Explore", icon: FaSearch, href: "/explore" },
  { label: "Upload", icon: FaPlusCircle, href: "/upload" },
  { label: "Challenge", icon: FaPalette, href: "/challange" },
  { label: "AI Assistant", icon: FaRobot, href: "/aichatbot" },
  { label: "Notifications", icon: FaBell, href: null },
];

const bottomNavItem = { label: "Settings", icon: FaCog, href: "/settings" };

const SideNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const bellRef = useRef(null);
  const settingsRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setShowSettingsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSettingsClick = () => {
    if (window.innerWidth < 768) {
      navigate("/settings"); // Mobile view → full page
    } else {
      setShowSettingsDropdown((prev) => !prev); // Desktop → dropdown
    }
  };

  return (
    <nav className="fixed top-0 left-0 h-screen w-40 bg-white backdrop-blur-sm flex flex-col justify-between py-3 z-50">
      {/* Top Nav */}
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-30 h-20 mb-15" />

        <ul className="flex flex-col items-center gap-10 mx-auto">
          {topNavItems.map((item, idx) => {
            const Icon = item.icon;

            if (item.label === "Notifications") {
              return (
                <li
                  key={idx}
                  className="relative group w-full flex justify-center"
                  ref={bellRef}
                >
                  <button
                    onClick={() => setShowDropdown((prev) => !prev)}
                    className="flex flex-col items-center text-2xl transition-transform duration-200 transform group-hover:scale-110 text-gray-700 hover:text-[var(--primary)]"
                  >
                    <Icon />
                  </button>

                  {showDropdown && (
                    <div className="absolute left-full top-[-20rem] ml-20 z-50">
                      <NotificationsDropdown notifications={notifications} />
                    </div>
                  )}

                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs rounded bg-[var(--dark)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.label}
                  </span>
                </li>
              );
            }

            return (
              <li key={idx} className="relative group w-full flex justify-center">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `flex flex-col items-center text-2xl transition-transform duration-200 transform group-hover:scale-110 
                    ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-gray-700 hover:text-[var(--primary)]"
                    }`
                  }
                >
                  <Icon />
                </NavLink>

                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs rounded bg-[var(--dark)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Settings Icon */}
      <div
        className="flex flex-col items-center mb-10 relative group"
        ref={settingsRef}
      >
        <button
          onClick={handleSettingsClick}
          className={`flex flex-col items-center text-2xl mb-4 transition-transform duration-200 transform hover:scale-110
            text-gray-700 hover:text-[var(--primary)]
          `}
        >
          <bottomNavItem.icon />
        </button>

        {/* Desktop Dropdown */}
        {showSettingsDropdown && <SettingsDropdown />}

        <span className="absolute left-23 top-1/3 -translate-y-1/2 ml-2 px-2 py-1 text-xs rounded bg-[var(--dark)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          {bottomNavItem.label}
        </span>
      </div>
    </nav>
  );
};

export default SideNav;
