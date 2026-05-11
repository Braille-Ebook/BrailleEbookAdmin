import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isLogin = localStorage.getItem("isLogin");

  if (isLogin !== "true") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
