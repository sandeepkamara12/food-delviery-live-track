import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  // const location = useLocation()
  // const path = location.pathname;

  if (!isAuthenticated) return <Navigate to="/login" replace />;
    // Redirect based on actual role
  // if (user?.role === "owner" && !path.startsWith("/owner")) {
  //   return <Navigate to="/owner" replace />;
  // }

  // if (user?.role !== "owner" && !path.startsWith("/users")) {
  //   return <Navigate to="/users" replace />;
  // }

  return <Outlet />;
};

export default PrivateRoute;
