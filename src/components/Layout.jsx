import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default Layout;
