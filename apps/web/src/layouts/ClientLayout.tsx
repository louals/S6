// src/layouts/ClientLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/client/Navbar";

export default function ClientLayout() {
    return (
      <>
        <Navbar />      {/* <— logo & nav appear */}
        <Outlet />      {/* nested page content */}
      </>
    );
  }