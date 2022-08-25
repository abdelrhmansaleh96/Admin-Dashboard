import React from "react";
import classes from "./Home.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  return (
    <div className={classes.home}>
      <Sidebar />
      <div className={classes.container}>hi</div>
    </div>
  );
}

export default Home;
