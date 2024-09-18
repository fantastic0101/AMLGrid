import React from 'react';
import Header from './Header';
import "./custom.css";
import "./output.css";

const DashboardLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="container mx-auto flex justify-between flex-grow flex justify-center bg-white-600 main-content">{children}</main>
  </div>
);

export default DashboardLayout;