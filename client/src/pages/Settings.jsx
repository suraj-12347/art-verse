import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";          // ✅ Added
import { logout } from "../redux/slices/userSlice"; 

const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
      dispatch(logout());     // Redux logout
      setOpen(false);
      navigate("/log-in");    // Redirect to login page
    };

  return (
    <div className="min-h-screen bg-[var(--bg)] p-6 text-white pb-20">
      <h1 className="text-2xl font-bold mb-6 text-[var(--primary)] ">Settings</h1>

      {/* 1️⃣ Edit Profile */}
      <div
        onClick={() => navigate("/edit-profile")}
        className="bg-white p-4 rounded-lg mb-4 cursor-pointer shadow-lg hover:bg-[var(--primary)] transition"
      >
        <h2 className="text-lg font-semibold text-[var(--primary)] ">Edit Profile</h2>
        <p className="text-gray-400 text-sm mt-1">
          Change your name, bio, profile photo, and mood preferences.
        </p>
      </div>

      {/* 2️⃣ Theme & Appearance */}
      <div className="bg-white p-4 rounded-lg mb-4 cursor-pointer shadow-lg hover:bg-[var(--primary)] transition">
        <h2 className="text-lg font-semibold text-[var(--primary)] ">Theme & Appearance</h2>
        <p className="text-gray-400 text-sm mt-1">
          Light/Dark mode, font size, and accent color settings.
        </p>
      </div>

      {/* 3️⃣ Notifications */}
      <div className="bg-white p-4 rounded-lg mb-4 cursor-pointer shadow-lg hover:bg-[var(--primary)] transition">
        <h2 className="text-lg font-semibold text-[var(--primary)] ">Notifications</h2>
        <p className="text-gray-400 text-sm mt-1">
          Control likes, comments, buy link notifications, and AI suggestions.
        </p>
      </div>

      {/* 4️⃣ Account & Security */}
      <div className="bg-white p-4 rounded-lg mb-4 cursor-pointer shadow-lg hover:bg-[var(--primary)] transition">
        <h2 className="text-lg font-semibold text-[var(--primary)] ">Account & Security</h2>
        <p className="text-gray-400 text-sm mt-1">
          Change password, manage linked accounts, logout, or delete account.
        </p>
      </div>

      {/* 5️⃣ Privacy & Safety */}
      <div className="bg-white p-4 rounded-lg mb-4 cursor-pointer shadow-lg hover:bg-[var(--primary)] transition">
        <h2 className="text-lg font-semibold text-[var(--primary)] ">Privacy & Safety</h2>
        <p className="text-gray-400 text-sm mt-1">
          Manage who can see your posts, block users, and report content.
        </p>
      </div>

      {/* 6️⃣ Help */}
      <div className="bg-white p-4 rounded-lg mb-4 cursor-pointer shadow-lg hover:bg-[var(--primary)] transition">
        <h2 className="text-lg font-semibold text-[var(--primary)] ">Help & Support</h2>
        <p className="text-gray-400 text-sm mt-1">
          FAQs, contact support, and learn more about using ArtVerse.
        </p>
      </div>
      
      
      <div className="bg-white p-4 rounded-lg mb-4 cursor-pointer shadow-lg hover:bg-[var(--primary)] transition">
       
        <button
                onClick={handleLogout}   // ✅ Updated
                className="text-lg font-semibold text-[var(--primary)]"
              >
                <h2 className="text-lg font-semibold text-[var(--primary)] ">Logout</h2>
              </button>
       
      </div>
    </div>
  );
};

export default Settings;
