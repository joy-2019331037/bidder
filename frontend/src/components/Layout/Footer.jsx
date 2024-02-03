import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/LOGO.png";
import playstore from "../../assets/images/playstore.png";
import applestore from "../../assets/images/applestore.png";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="FirstPart">
          <img src={logo} alt="" />
          <div className="copyrightText">
            All content of this site, unless otherwise noted
          </div>
          <div className="copyrightText">are copyright © 2023 BIDDER</div>
          <div className="copyrightText">All rights are reserved.</div>

          <div className="social_Links">
            <Link className="link" to="https://www.facebook.com/">
              <i class="ri-facebook-circle-fill"></i>
            </Link>
            <Link className="link" to="https://www.instagram.com/">
              <i class="ri-instagram-fill"></i>
            </Link>
            <Link className="link" to="https://www.youtube.com/">
              <i class="ri-youtube-fill"></i>
            </Link>
          </div>
        </div>
        <div className="MiddlePart">
          <div className="m1">
            <Link className="label">Personal Information</Link>
            <Link className="label">Open Orders</Link>
            <Link className="label">Shipped Orders</Link>
            <Link className="label">Auctions in progress</Link>
            <Link className="label">Closed Auctions</Link>
          </div>
          <div className="m2">
            <Link className="label">Favorites</Link>
            <Link className="label">Personal Shoppers</Link>
            <Link className="label">Saved Searches</Link>
            <Link className="label">Pickup Schedule</Link>
            <Link className="label">Customer Service</Link>
          </div>
          <div className="m3">
            <label>
              <b>SUPPORT</b>
            </label>
            <Link className="label">Help Center</Link>
            <Link className="label">Contact Center</Link>

            <label>
              <b>ABOUT</b>
            </label>
            <Link className="label">About BIDDER</Link>
            <Link className="label">Donate</Link>
          </div>
        </div>
        <div className="LastPart">
          <Link className="webLINK" to="https://play.google.com/store/">
            <div className="webLink">
              <img src={playstore} alt="" />
              <div className="webLinkText">
                <div className="upText">Get it on</div>
                <div className="downText">Google Play</div>
              </div>
            </div>
          </Link>
          <Link className="webLINK" to="https://www.apple.com/app-store/">
            <div className="webLink">
              <img src={applestore} alt="" />
              <div className="webLinkText">
                <div className="upText">Download on the</div>
                <div className="downText">Apple Store</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
