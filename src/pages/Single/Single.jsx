import { Avatar } from "@mui/material";
import React from "react";
import person1 from "../../assets/images/person1.jpg";
import Chart from "../../components/Chart/Chart";
import "./Single.scss";
import List from "../../components/Table/Table";

function Single() {
  return (
    <div className="single">
      <div className="top">
        <div className="info">
          <div className="edit">Edit</div>
          <h6 className="header">information</h6>
          <div className="details">
            <Avatar
              alt="ahmed"
              src={person1}
              sx={{ width: "100px", height: "100px" }}
            />
            <div className="info-details">
              <div className="name">Ahmed Saleh</div>
              <div className="item">
                <span>Email</span> : ahmed@gmail.com
              </div>
              <div className="item">
                <span>Phone</span> : 01000961377
              </div>
              <div className="item">
                <span>Address</span> : 6 el Masala St , Cairo{" "}
              </div>
              <div className="item">
                <span>Country</span>: Egypt
              </div>
            </div>
          </div>
        </div>
        <div className="chart">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
        <div className="title">Latest Transactions</div>
        <List />
      </div>
    </div>
  );
}

export default Single;
