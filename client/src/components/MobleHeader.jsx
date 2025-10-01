import React, { useState } from "react";
import logo from "../assets/artverse.png";
import { FaRegHeart, FaRobot } from "react-icons/fa"; // ✅ FontAwesome Icons
import { useNavigate } from "react-router-dom"; // ✅ Navigation hook

const MobileHeader = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();

  const handleClick = (icon) => {
    setActiveIcon(icon);
    if (icon === "heart") navigate("/notifications");  // ✅ Notification redirect
    if (icon === "ai") navigate("/aichatbot");         // ✅ AI chatbot redirect
  };

  return (
    <header className="w-full h-16 bg-white flex items-center justify-between px-4 shadow-md lg:hidden">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Heart / Notification */}
        <button
          onClick={() => handleClick("heart")}
          className="relative p-2 rounded-full hover:bg-gray-100 transition"
        >
          <FaRegHeart
            className={`h-6 w-6 transition-colors duration-200 ${
              activeIcon === "heart" ? "text-[var(--primary)]" : "text-gray-700 hover:text-[var(--primary)]"
            }`}
          />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* AI Robot */}
        <button
          onClick={() => handleClick("ai")}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <FaRobot
            className={`h-6 w-6 transition-colors duration-200 ${
              activeIcon === "ai" ? "text-[var(--primary)]" : "text-gray-700 hover:text-[var(--primary)]"
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
