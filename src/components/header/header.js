import React from "react";
import "./header.scss";
import { IoSearchSharp } from "react-icons/io5";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

const Header = () => {
  return (
    <div className="holdHeader">
      <div style={{ display: "flex" }}>
        <div className="headerAddres">
          <div className="headerAddres2">
            <span>Granger, IA</span>
            <MdCancel style={{ color: "gray", cursor: "pointer" }} />
          </div>
          <input type="text" placeholder="Add More" className="headerInput" />
        </div>
        <button className="headerSearch">
          <IoSearchSharp style={{ color: "white", fontSize: "18px" }} />
        </button>
      </div>
      <div>
        <span style={{ margin: "10px 6em", cursor: "pointer" }}>Udwell</span>
        <span style={{ margin: "10px 8em 0 0", cursor: "pointer" }}>
          Sell a property
        </span>
        <RiBarChartHorizontalFill style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Header;
