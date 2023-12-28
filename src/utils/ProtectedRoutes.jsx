import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  let auth = { state: token };

  return auth.state ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
