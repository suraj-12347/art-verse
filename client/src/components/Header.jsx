// Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import profilePic from "../assets/mypic.jpg"; 
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";          // ✅ Added
import { logout } from "../redux/slices/userSlice";  // ✅ Added
import Input from "./Input";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();                   // ✅ Added

  // click outside close dropdown
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Updated logout
  const handleLogout = () => {
    dispatch(logout());     // Redux logout
    setOpen(false);
    navigate("/log-in");    // Redirect to login page
  };

  return (
    <header className="fixed xl:w-full  2xl:w-full lg:w-[95%]  md:w-[90%] top-0 pt-8 pb-2 left-36  bg-white flex  items-center px-6 z-[150] gap-4 md:gap-2 2xl:gap-5 h-22 ">
      {/* Search Box */}
      <div className="flex items-center bg-[var(--bg)] px-4 py-2  rounded-full w-full max-w-[85%] h-12">
        <FaSearch className="text-[var(--primary)] mr-2" />
        <Input navigate={navigate}/>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <div className="relative" ref={dropdownRef}>
          <img
            src={profilePic}
            alt="Profile"
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />

          {/* Dropdown */}
          {open && (
            <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg overflow-hidden w-44 animate-fadeIn z-50">
              <Link
                to="/profile/:id"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-[var(--dark)] hover:bg-[var(--bg)] hover:text-[var(--primary)]"
              >
                Your Profile
              </Link>
              <Link
                to="/setting"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-[var(--dark)] hover:bg-[var(--bg)] hover:text-[var(--primary)]"
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}   // ✅ Updated
                className="w-full text-left px-4 py-2 text-sm text-[var(--dark)] hover:bg-[var(--bg)] hover:text-[var(--primary)]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
