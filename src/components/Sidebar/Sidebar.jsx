import React from "react";
import CustomDrawer from "./CustomDrawer";
import classes from "./Sidebar.module.scss";

function Sidebar({ children }) {
  return (
    <>
      <CustomDrawer>{children}</CustomDrawer>
    </>
  );
}

export default Sidebar;
