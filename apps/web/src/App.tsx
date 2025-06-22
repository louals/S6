import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import LoginPage   from "./pages/auth/login";
import RegisterPage from "./pages/auth/signup";
import Home        from "./pages/client/Home";
import UploadCvPage from "./pages/client/UploadCv";

import EmployerRoute from "./routes/EmployerRoute";
import AddJobOfferPage from "./pages/employer/AddJobOfferPage";
import EditJobOfferPage from "./pages/employer/EditJobOfferPage";
import EmployerPage from "./pages/employer/EmployerPage";

import AdminLayout from "./layouts/AdminLayout";
import AdminRoute from "./routes/AdminRoute";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";


import ClientLayout from "./layouts/ClientLayout";

import LoadingM from "./components/animations/LoadingM";
import LoginSuccess from "./pages/LoginSuccess";
import EmployerLayout from "./layouts/EmployerLayout";




export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
      
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/loading" element={<LoadingM />} />
          
          <Route path="/" element={<ClientLayout />}>
        
            <Route index element={<Home />} />
            <Route path="/upload" element={<UploadCvPage />} />
          </Route>

          <Route path="/employer" element={<EmployerLayout />}>
  <Route
    path="dashboard"
    element={
      <EmployerRoute>
        <EmployerPage />
      </EmployerRoute>
    }
  />
  <Route
    path="jobs"
    element={
      <EmployerRoute>
        <EmployerPage />
      </EmployerRoute>
    }
  />
  <Route
    path="jobs/new"
    element={
      <EmployerRoute>
        <AddJobOfferPage />
      </EmployerRoute>
    }
  />
  <Route
    path="jobs/:id/edit"
    element={
      <EmployerRoute>
        <EditJobOfferPage />
      </EmployerRoute>
    }
  />
</Route>

<Route path="/admin" element={<AdminLayout />}>
  <Route
    path="dashboard"
    element={
      <AdminRoute>
        <AdminDashboardPage />
      </AdminRoute>
    }
  />
  <Route
    path="users"
    element={
      <AdminRoute>
        <AdminUsersPage />
      </AdminRoute>
    }
  />
</Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
