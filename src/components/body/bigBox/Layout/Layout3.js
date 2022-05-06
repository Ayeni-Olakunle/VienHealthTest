import React from "react";
import "./Layout3.scss";
import { BsThreeDots, BsPerson } from "react-icons/bs";
import ApexChartCircle2 from "../Graph/Layout4";
import ApexChartLineGraph from "../Graph/Layout3";

const Layout3 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        margin: "2em 0",
      }}
    >
      <div className="holdTwo" style={{ marginRight: "10px" }}>
        <div className="holdLayout">
          <h5 style={{ color: "#3E3F42", fontSize: "16px", margin: "13px 0" }}>
            Daily active Clients
          </h5>
          <BsThreeDots style={{ color: "#9EA0A5" }} />
        </div>
        <div>
          <ApexChartLineGraph />
        </div>
      </div>
      <div className="holdCircle" style={{ marginRight: 0 }}>
        <div>
          <div className="holdCircleTop">
            <div className="holdCircleTop2">
              <div className="money" style={{ backgroundColor: "#FACF55" }}>
                <BsPerson />
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    padding: "3px",
                    color: "#3E3F42",
                    fontWeight: "500",
                  }}
                >
                  User Onboarding
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    padding: "3px",
                    color: "#a3a3a3",
                  }}
                >
                  Q3 Goal: 8,000 User
                </p>
              </div>
            </div>
            <BsThreeDots style={{ color: "#9EA0A5" }} />
          </div>
          <div className="holdGraphCircle">
            <div>
              <ApexChartCircle2 />
            </div>
            <div>
              <div className="holdCircleText">
                <p className="textDigit">2,452</p>
                <p className="textWord">ONBOARDED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
