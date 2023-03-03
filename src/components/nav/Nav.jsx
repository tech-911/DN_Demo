import React from "react";
import "./nav.scss";
import Search from "../search/Search";
import apple from "../../assets/png/apple.png";
import playstore from "../../assets/png/playstore.png";
import DownloadButton from "../downloadButton/DownloadButton";

const Nav = () => {
  return (
    <div className="nav_wrapper">
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
    </div>
  );
};

export default Nav;
