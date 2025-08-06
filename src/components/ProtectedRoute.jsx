import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or show a spinner
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
