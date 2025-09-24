// Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import profilePic from "../assets/mypic.jpg"; 
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    setOpen(false);
    navigate("/"); // filhal landing page
  };

  return (
    <header className="fixed w-full top-0 pt-8 pb-2 left-38  bg-white flex  items-center px-6 z-[150] gap-4 h-22 ">
      {/* Search Box */}
      <div className="flex items-center bg-[var(--bg)] px-4 py-2 rounded-full w-full max-w-5xl h-12">
        <FaSearch className="text-[var(--primary)] mr-2" />
        <input
          type="text"
          placeholder="Search artworks, artists..."
          className="border-none outline-none bg-transparent w-full text-sm"
        />
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
                to="/profile"
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
                onClick={handleLogout}
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
