import React, { useState, useEffect } from "react";
import NotificationsDropdown from "../components/NotificationsDropdown";
import NotificationsPage from "../components/NotificationsPage";
import { notifications } from '../assets/data';

const Notifications = () => {
  const [isMobile, setIsMobile] = useState(false);
 

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? (
   <>
    <h1 className="text-3xl font-semibold pt-3 pl-3 bg-white  text-[var(--primary)]">
        Notifications
      </h1>
    <NotificationsPage notifications={notifications}  /></>
  ) : (
    <NotificationsDropdown notifications={notifications} />
  );
};

export default Notifications;
