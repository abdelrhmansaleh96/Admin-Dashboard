import React from "react";
import classes from "./Featured.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Featured() {
  return (
    <div className={classes.featured}>
      <div className={classes.top}>
        <h1 className={classes.title}>Total Revenue</h1>
        <MoreVertIcon />
      </div>
      <div className={classes.bottom}>
        <CircularProgressbar
          className={classes.featuredChart}
          value={60}
          text={`60%`}
          strokeWidth={5}
        />
        <div className={classes.title}>Total sales made today</div>
        <div className={classes.amount}>$420</div>
        <div className={classes.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
          eaque.
        </div>
        <div className={classes.detailsContainer}>
          <div className={classes.details}>
            <div className={classes.target}>Target</div>
            <div className={`${classes.results} ${classes.negative}`}>
              <KeyboardArrowDownIcon fontSize="small" />
              $12.4K
            </div>
          </div>
          <div className={classes.details}>
            <div className={classes.target}>Target</div>
            <div className={`${classes.results} ${classes.positive}`}>
              <KeyboardArrowUpIcon fontSize="small" />
              $12.4K
            </div>
          </div>
          <div className={classes.details}>
            <div className={classes.target}>Target</div>
            <div className={`${classes.results} ${classes.positive}`}>
              <KeyboardArrowUpIcon fontSize="small" />
              $12.4K
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
