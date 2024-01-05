import { Outlet, Navigate } from "react-router-dom";

function UserProtected() {
  const user = false;
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default UserProtected;
