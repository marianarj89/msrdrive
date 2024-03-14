/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Navigate, Outlet, useOutletContext } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 

export default function ProtectedRoute({ children, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route {...rest}>
      {currentUser ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace /> 
      )}
    </Route>
  );
}