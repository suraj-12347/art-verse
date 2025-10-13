import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/log-in" />;
  }

  // Agar route admin only hai, aur user admin nahi hai
  if (adminOnly && !isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
