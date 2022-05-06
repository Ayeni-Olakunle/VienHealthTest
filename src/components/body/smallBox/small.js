import React, { useState } from "react";
import "./small.scss";
import man from "../../../Image/Ellipse 77.png";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { BsPerson, BsFillCalculatorFill } from "react-icons/bs";
import { AiOutlineFileText, AiOutlinePieChart } from "react-icons/ai";
import { SiHomeassistant } from "react-icons/si";
import { GiArchiveResearch, GiNotebook } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { FiSettings, FiLink } from "react-icons/fi";

const Small = () => {
  const [linkValue, setLinkValue] = useState(
    "linkedin.com/in/ayeni-olakunle-6a4a221a5"
  );
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div>
          <img src={man} alt="Profile Img" />
          <MdOutlinePhotoCamera className="smallImage" />
        </div>
        <div style={{ marginBottom: "40px" }}>
          <h4 style={{ margin: "15px" }}>Alex Assenmacher</h4>
          <p>Home Buyer</p>
          <button className="editProfile">Edit profile</button>
        </div>
      </div>
      <div>
        <div className="holdList callSo">
          <p className="listText">Profile</p>
          <BsPerson className="iconColor" />
        </div>
        <div className="holdList callSo">
          <p className="listText">My list</p>
          <AiOutlineFileText className="iconColor" />
        </div>
        <div className="holdList callSo">
          <p className="listText">Saved home</p>
          <SiHomeassistant className="iconColor" />
        </div>
        <div className="holdList callSo">
          <p className="listText">Saved search</p>
          <GiArchiveResearch className="iconColor" />
        </div>
        <div className="holdList callSo">
          <p className="listText">Messages</p>
          <TiMessages className="iconColor" />
        </div>
        <div className="holdList callSo">
          <p className="listText">Notification</p>
          <FiSettings className="iconColor" />
        </div>
        <div className="holdList callSo">
          <p className="listText">Billing</p>
          <BsFillCalculatorFill className="iconColor" />
        </div>
        <div className="holdList callSo">
          <p className="listText">Analytics</p>
          <AiOutlinePieChart className="iconColor" />
        </div>
        <div
          className="holdList callSo"
          style={{ borderBottom: "1.5px solid #e8e8e8" }}
        >
          <p className="listText">Blog</p>
          <GiNotebook className="iconColor" />
        </div>
      </div>
      <div>
        <p>Profile Link</p>
        <div style={{ display: "flex" }}>
          <input type="text" defaultValue={linkValue} className="profileLink" />
          <div className="linkIcon">
            <FiLink style={{ color: "#2196f3" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Small;
