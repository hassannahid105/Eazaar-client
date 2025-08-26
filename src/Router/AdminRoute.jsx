import { Navigate } from "react-router";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  if (loading || isAdminLoading) {
    return <p>Loading........</p>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!isAdmin) {
    logOut();
    return <Navigate to="/login" />;
  }
  return children;
};

export default AdminRoute;
