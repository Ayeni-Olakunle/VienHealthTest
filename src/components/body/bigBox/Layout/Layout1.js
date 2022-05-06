import React from "react";
import "./Layout1.scss";
import ApexChart from "../Graph/Layout1";

const Layout1 = () => {
  return (
    <div>
      <div className="holdBoxes">
        <div className="box">
          <div className="boxStageOne">
            <p className="sales">Sales</p>
            <p className="monthly">Monthly Goal</p>
          </div>
          <div className="boxStageTwo">
            <p className="salesPercentage">98.1%</p>
            <p className="profitsValue">+6.9%</p>
          </div>
          <div className="HoldProgress">
            <div className="InnerProgress"></div>
          </div>
          <p className="yearly">Yearly Goal</p>
        </div>
        <div className="box" style={{ margin: "0 1em" }}>
          <div className="boxStageOne">
            <p className="sales">Revenue</p>
            <p className="monthly">Total Profit</p>
          </div>
          <div className="boxStageTwo">
            <p className="salesPercentage">$13,893</p>
            <p className="profitsValue" style={{ color: "#FF8433" }}>
              +11.3%
            </p>
          </div>
          <div>
            <div className="holdBar">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
              <div className="bar4"></div>
              <div className="bar5"></div>
              <div className="bar6"></div>
              <div className="bar7"></div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="boxStageOne">
            <p className="sales">Clients</p>
            <p className="monthly">Subscribed</p>
          </div>
          <div className="boxStageTwo">
            <p className="salesPercentage">1,232</p>
            <p className="profitsValue">+3.2%</p>
          </div>
          <div className="HoldProgress">
            <div className="InnerProgress"></div>
          </div>
          <p className="yearly">Yearly Goal</p>
        </div>
      </div>
    </div>
  );
};

export default Layout1;
