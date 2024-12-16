import React from "react";
import { Navigate } from "react-router-dom";
import { UserRole } from "./UserRole";

function PrivateRoute({ children, allowedRoles }) {
  const role = UserRole();

  if (!role) {
    return <Navigate to="/signIn" />; // Redirect if no role or token
  }

  if (allowedRoles.includes(role)) {
    return <>{children}</>; // Render children if allowed
  }

  return <Navigate to="/" />; // Redirect if role is not allowed
}

export default PrivateRoute;
