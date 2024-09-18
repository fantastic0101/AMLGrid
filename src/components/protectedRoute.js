import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Access the Redux store state
  const token = useSelector((state) => state.auth.token);
  
  // Log the entire auth state or any specific part of the state you want
  const authState = useSelector((state) => state.auth);
  console.log('Redux Store - Auth State:', authState);

  if (!token) {
    // Redirect to sign in if no token
    return <Navigate to="/signin" replace />;
  }

  // Render the children if token exists
  return children;
};

export default ProtectedRoute;