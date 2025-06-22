import { Outlet, Navigate, useLocation } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavBar";

export default function AdminLayout() {
  const { pathname } = useLocation();

  // bare /admin  →  /admin/dashboard
  if (pathname === "/admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
