import React from "react";
import CustomDrawer from "./CustomDrawer";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <CustomDrawer>{children}</CustomDrawer>
    </div>
  );
};

export default Layout;
