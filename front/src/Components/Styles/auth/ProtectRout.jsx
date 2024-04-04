import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, user, redirct = "/login" }) => {
  if (!user) {
    return <Navigate to={redirct} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectRoute;
