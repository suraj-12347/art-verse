import { useNavigate } from "react-router-dom";
import React from "react";

const SettingsDropdown = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  const handleTheme = () => {
    alert("Theme settings clicked (future)"); // placeholder
  };

  const handleNotifications = () => {
    alert("Notifications settings clicked (future)"); // placeholder
  };

  const handleAccount = () => {
    alert("Account & Security settings clicked (future)"); // placeholder
  };

  return (
    <div className="bg-white flex flex-col gap-2  absolute left-40 -top-60 text-[var(--dark)] shadow-lg rounded-lg w-70  p-4 ">
      <button
        className="w-full text-left px-4 py-2 hover:bg-[var(--primary)] transition bg-[var(--bg)] rounded-lg"
        onClick={handleEditProfile}
      >
        Edit Profile
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-[var(--primary)] transition bg-[var(--bg)] rounded-lg"
        onClick={handleTheme}
      >
        Theme & Appearance
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-[var(--primary)] transition bg-[var(--bg)] rounded-lg"
        onClick={handleNotifications}
      >
        Notifications
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-[var(--primary)] transition bg-[var(--bg)] rounded-lg"
        onClick={handleAccount}
      >
        Account & Security
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-[var(--primary)] transition bg-[var(--bg)] rounded-lg"
        onClick={handleAccount}
      >
         privacy & Safety
      </button>
      <button
        className="w-full text-left px-4 py-2 hover:bg-[var(--primary)] transition bg-[var(--bg)] rounded-lg"
        onClick={handleAccount}
      >
         Help
      </button>
     
    </div>
  );
};

export default SettingsDropdown;
