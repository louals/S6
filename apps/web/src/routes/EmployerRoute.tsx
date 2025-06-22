import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function EmployerRoute({ children }: { children: React.ReactNode }) {
  const { user, token } = useAuth();

  
  if (token && user === null) {
    return null; 
  }

  
  if (user.role !== "employer") return <Navigate to="/dashboard" replace />;

  
  return <>{children}</>;
}
