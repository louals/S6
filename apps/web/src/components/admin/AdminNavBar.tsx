import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function AdminNavbar() {
  const { logout } = useAuth();

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold ${
      isActive
        ? "text-primary"
        : "text-gray-600 dark:text-gray-300 hover:text-primary"
    }`;

  return (
    <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/admin/dashboard" className="text-xl font-bold">
          JobMatch <span className="text-primary">Admin</span>
        </Link>

        <nav className="flex gap-6 items-center">
          <NavLink to="/admin/dashboard" className={linkCls}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className={linkCls}>
            Users
          </NavLink>
          <button
            onClick={logout}
            className="text-red-500 hover:text-red-600 text-sm"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
