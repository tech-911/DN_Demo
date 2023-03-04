import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import instagram from "../../assets/png/instagram.png";
import twitter from "../../assets/png/twitter.png";
import facebook from "../../assets/png/facebook.png";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_main">
        <div className="footer_main_item1">
          <h1 className="footer_main_item1_header">Useful Links</h1>
          <Link to="/">Help</Link>
          <Link to="/">EULA</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Podcast Terms & Conditions</Link>
          <Link to="/">Sitemap</Link>
        </div>
        <div className="footer_main_item2">
          <h1 className="footer_main_item2_header">Content Provider</h1>
          <Link to="/">CMS</Link>
          <Link to="/">Visual Identity Guide</Link>
        </div>
        <div className="footer_main_item3">
          <h1 className="footer_main_item3_header">Company</h1>
          <Link to="/">About dawahnigeria</Link>
          <Link to="/">DN for artist</Link>
          <Link to="/">Partners</Link>
          <Link to="/">Advertise on DN</Link>
          <Link to="/">Subscribe</Link>
        </div>
        <div className="footer_main_item4">
          <h1 className="footer_main_item4_header">Follow us</h1>
          <div className="footer_follow_icons">
            <Link to={"/"}>
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to={"/"}>
              <img src={twitter} alt="twitter" />
            </Link>
            <Link to={"/"}>
              <img src={instagram} alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer_sub">
        <p className="footer_sub_text">Powered by The E-dawah Foundation</p>
      </div>
    </div>
  );
};

export default Footer;
