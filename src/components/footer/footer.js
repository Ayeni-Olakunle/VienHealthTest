import React from "react";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="holdFoot1">
        <div className="foot1">
          <p className="foot1Text">
            Counter Delivery, Carters Beach
            <br /> Post Center, Westport
          </p>
        </div>
        <div className="foot2">
          <h4 className="footHead">About</h4>
          <p className="footChild">Company</p>
          <p className="footChild">Team</p>
          <p className="footChild">Careers</p>
          <p className="footChild">Blog</p>
        </div>
        <div className="foot3">
          <h4 className="footHead">Support</h4>
          <p className="footChild">Help Center</p>
          <p className="footChild">Cancellation Options</p>
          <p className="footChild">Neighborhood Support</p>
          <p className="footChild">Trust {"&"} Safety</p>
        </div>
        <div className="foot4">
          <h4 className="footHead">Address</h4>
          <p className="foot1Text">
            Counter Delivery, Carters Beach
            <br /> Post Center, Westport
          </p>
          <div className="holdIcons">
            <div className="faceBook">
              <FaFacebookF />
            </div>
            <div className="faceBook2">
              <FaInstagram />
            </div>
            <div className="faceBook">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="footLast">
          <p>&copy; Udwell, LLC.All right reserved.</p>
          <p>
            <BsDot />
          </p>
          <p>Teams {"&"} Conditions</p>
          <p>
            <BsDot />
          </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
