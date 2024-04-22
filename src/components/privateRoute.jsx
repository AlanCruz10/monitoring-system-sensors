import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({stateUser, children, redirectTo="/"}) => {
  if (!stateUser) {
    return <Navigate to={redirectTo} />
  }

  return <Outlet/>
}