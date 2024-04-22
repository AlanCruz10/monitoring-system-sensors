import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token') !== null; // Reemplaza esto con tu propia lógica de autenticación

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
