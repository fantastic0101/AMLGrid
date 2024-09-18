import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardRoute from './router/DashboardRoute';
import MainRoute from './router/MainRoute';
import AuthRoute from './router/AuthRoute';
import "./App.css";

function App() {

  return (
    <Router>
      <DashboardRoute />
      <MainRoute />
      <AuthRoute />
    </Router>
  );
}

export default App;
