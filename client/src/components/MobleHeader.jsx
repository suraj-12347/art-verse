import React, { useState, useEffect } from "react";
import logo from "../assets/artverse.png";
import { FaRegHeart, FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { notifications } from "../assets/data";

const MobileHeader = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [hasUnread, setHasUnread] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setHasUnread(true);
    
  }, []);

  

  const handleClick = (icon) => {
     
    setActiveIcon(icon);
    setHasUnread(false);
   

    if (icon === "heart") {
      navigate("/notifications");
     
     
    }

    if (icon === "ai") navigate("/aichatbot");
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
        <div className="relative">
          <button
            onClick={() => handleClick("heart")}
            className="p-2 rounded-full hover:bg-gray-100 transition relative"
          >
            <FaRegHeart
              className={`h-6 w-6 transition-colors duration-200 ${
                activeIcon === "heart"
                  ? "text-[var(--primary)]"
                  : "text-gray-700 hover:text-[var(--primary)]"
              }`}
            />
          </button>

          {/* Notification Badge */}
          {hasUnread && (
            <span className="absolute top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
          )}
        </div>

        {/* AI Robot */}
        <button
          onClick={() => handleClick("ai")}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <FaRobot
            className={`h-6 w-6 transition-colors duration-200 ${
              activeIcon === "ai"
                ? "text-[var(--primary)]"
                : "text-gray-700 hover:text-[var(--primary)]"
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
