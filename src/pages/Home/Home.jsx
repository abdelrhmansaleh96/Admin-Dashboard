import React from "react";
import Chart from "../../components/Chart/Chart";
import Featured from "../../components/Featured/Featured";
import Widget from "../../components/Widget/Widget";
import classes from "./Home.module.scss";
import List from "../../components/Table/Table";

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.widgets}>
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className={classes.charts}>
        <Featured />
        <Chart aspect={2 / 1} title="Last 6 Months Revenue" />
      </div>
      <div className={classes.listContainer}>
        <div className={classes.listTitle}>Latest Transactions</div>
        <List />
      </div>
    </div>
  );
}

export default Home;
