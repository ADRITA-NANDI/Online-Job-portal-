import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const HOME = {
  admin: "/admin",
  employer: "/employer",
  seeker: "/dashboard",
};

export default function RoleGuard({ role, children }) {
  const { user, isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userRole = String(user?.role || "seeker").toLowerCase();
  if (role && userRole !== role.toLowerCase()) {
    return <Navigate to={HOME[userRole] || "/"} replace />;
  }

  return children;
}