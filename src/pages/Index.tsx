
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to the Portfolio page which contains all our components
  return <Navigate to="/" replace />;
};

export default Index;
