import React from 'react';

const AuthLayout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <main className="flex-grow flex items-center justify-center bg-white">{children}</main>
  </div>
);

export default AuthLayout;