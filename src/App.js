import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardRoute from './router/DashboardRoute';
import MainRoute from './router/MainRoute';
import AuthRoute from './router/AuthRoute';
import "./App.css";

function App() {

  return (
    <Router>
      <Provider store={store}>
        <DashboardRoute />
        <MainRoute />
        <AuthRoute />
      </Provider>
    </Router>
  );
}

export default App;
