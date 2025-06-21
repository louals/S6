import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import LoginPage   from "./pages/auth/login";
import Home        from "./pages/client/Home";

import ClientLayout from "./layouts/ClientLayout";
import RegisterPage from "./pages/auth/signup";
import LoadingM from "./components/animations/LoadingM";
import LoginSuccess from "./pages/LoginSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public login route (no navbar) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/loading" element={<LoadingM />} />
          {/* All routes below are wrapped in ClientLayout → Navbar visible */}
          <Route element={<ClientLayout />}>
            {/* index = “/” */}
            <Route index element={<Home />} />

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
