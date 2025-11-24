import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = () => {
  const { isAuthenticated, user } = useAuth();
  
  if (isAuthenticated && user?.role === 'user') return <Navigate to="/users" replace />;
  if (isAuthenticated && user?.role === 'owner') return <Navigate to="/owner" replace />;

  return <Outlet />;
};

export default PublicRoute;
