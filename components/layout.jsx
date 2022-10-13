import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className=" flex flex-row justify-start">
      <Sidebar />
      <div className="flex ml-20 ">{children}</div>
    </div>
  );
};

export default Layout;