import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  // If token exists, render child routes (Outlet). If not, redirect to Login.
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;