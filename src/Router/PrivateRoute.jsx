import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <p>Loading......</p>;
  }

  if (user?.email) {
    return children;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
