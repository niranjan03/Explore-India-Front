import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Read token from local storage
  const token = localStorage.getItem('adminToken');
  
  // If token doesn't exist, redirect to login page instantly
  return token ? children : <Navigate to="/admin/login" replace />;
}