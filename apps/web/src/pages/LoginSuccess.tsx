import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as api from "api";
import { extractUserId } from "../utils/jwt";
import { useAuth } from "../contexts/AuthContext";

export default function LoginSuccess() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { setUser } = useAuth();   // thanks to step 1

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token  = params.get("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // 1️⃣ Persist + set header
    localStorage.setItem("token", token);
    api.setAuthToken(token);

    // 2️⃣ Decode user ID
    const uid = extractUserId(token);
    if (!uid) {
      navigate("/login");
      return;
    }

    // 3️⃣ Fetch profile
    api.getUser(uid)
      .then(res => {
        setUser(res.data);
        navigate("/dashboard", { replace: true });
      })
      .catch(err => {
        console.error("Failed to fetch user", err);
        navigate("/login");
      });
  }, [search, navigate, setUser]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-semibold">Logging you in…</p>
    </div>
  );
}
