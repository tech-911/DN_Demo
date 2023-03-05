import React, { useContext, useEffect, useState } from "react";
import "./nav.scss";
import Search from "../search/Search";
import apple from "../../assets/png/apple.png";
import Logo from "../../assets/png/dn logo.png";
import playstore from "../../assets/png/playstore.png";
import DownloadButton from "../downloadButton/DownloadButton";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { NavContext } from "../layout/Layout";

const Nav = () => {
  const { res, setRes } = useContext(NavContext);
  const handleSideBar = () => {
    if (res === 1) {
      setRes(2);
    } else {
      setRes(1);
    }
  };
  return (
    <div className="nav_container">
      <div className="nav_wrapper">
        <div className="nav_logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="nav_search">
          <Search />
        </div>
        <div className="nav_download">
          <div className="nav_download1">
            <DownloadButton
              img={playstore}
              text1="GET IT ON"
              text2="Google Play"
              link={"/"}
            />
          </div>
          <div className="nav_download2">
            {" "}
            <DownloadButton
              img={apple}
              text1="Download on the"
              text2="Apple Store"
              link={"/"}
            />
          </div>
        </div>

        <div className="nav_res_download_wrapper">
          <button className="nav_res_download">Get app</button>
          <FiMenu
            onClick={() => {
              handleSideBar();
            }}
            className="nav_res_hamburger"
          />
        </div>
      </div>
      <div className="nav_search2">
        <Search />
      </div>
    </div>
  );
};

export default Nav;
