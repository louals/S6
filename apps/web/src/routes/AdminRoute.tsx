// routes/AdminRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, token } = useAuth();

  if (token && user === null) return null;        
  
  if (user.role !== "admin")  return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
}
