import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function AuthGuard({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}