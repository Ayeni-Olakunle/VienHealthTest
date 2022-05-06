import React from "react";
import "./Layout2.scss";
import { FaMoneyBill } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import ApexChartCircle from "../Graph/Layout2";
import ApexChartLineGraph from "../Graph/Layout3";

const Layout2 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        margin: "2em 0",
      }}
    >
      <div className="holdCircle">
        <div>
          <div className="holdCircleTop">
            <div className="holdCircleTop2">
              <div className="money">
                <FaMoneyBill />
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
                  Total Sales
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    padding: "3px",
                    color: "#34AA44",
                  }}
                >
                  +$985.56
                </p>
              </div>
            </div>
            <BsThreeDots style={{ color: "#9EA0A5" }} />
          </div>
          <div className="holdGraphCircle">
            <div>
              <ApexChartCircle />
            </div>
            <div>
              <div className="holdCircleText">
                <p className="textDigit">$2,595</p>
                <p className="textWord">Invoiced</p>
              </div>
              <div className="holdCircleText">
                <p className="textDigit">23</p>
                <p className="textWord">Invoices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* qwdwd */}
      <div className="holdTwo">
        <div className="holdLayout">
          <h5 style={{ color: "#3E3F42", fontSize: "16px", margin: "13px 0" }}>
            Daily Profit
          </h5>
          <BsThreeDots style={{ color: "#9EA0A5" }} />
        </div>
        <div>
          <ApexChartLineGraph />
        </div>
      </div>
    </div>
  );
};

export default Layout2;
