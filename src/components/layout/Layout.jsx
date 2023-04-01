import React, { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import SideNav from "../../components/sideNav/SideNav";
import Disk from "../../assets/png/disc 5.png";
import { BiShareAlt } from "react-icons/bi";
import { FaHome, FaPlay } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { MdFavorite } from "react-icons/md";

export const NavContext = createContext();

const Layout = () => {
  const [res, setRes] = useState(() => {
    return (
      Number(localStorage.getItem("navControl")) ||
      (window.innerWidth > 890 ? 2 : 1)
    );
  });

  useEffect(() => {
    localStorage.setItem("navControl", JSON.stringify(res));
    const handleResize = () => {
      if (window.innerWidth <= 890) {
        setRes(1);
      } else {
        setRes(2);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [res]);

  const handleSideBar = () => {
    if (res === 1) {
      setRes(2);
    } else {
      setRes(1);
    }
  };
  return (
    <div className="layout_wrapper">
      <div
        className={`layout_sidenav ${
          res === 2 ? "layout_sidenav_open" : "layout_sidenav_close"
        }`}
      >
        <SideNav res={res} />
      </div>
      {res === 2 ? (
        <div
          onClick={() => {
            handleSideBar();
          }}
          className="layout_overlay"
        ></div>
      ) : (
        ""
      )}
      <div className={`layout_outlet`}>
        <NavContext.Provider value={{ res, setRes }}>
          <Outlet />
        </NavContext.Provider>
      </div>
      {/* ----------------Mobile Buttom menue------------------- */}
      <div className="layout_buttom_menue">
        <div className="layout_buttom_menue1">
          <img src={Disk} alt="disk" />
          <div className="layout_buttom_text_wrap">
            <p className="layout_buttom_text1">Ramadan Tafseer Day 6 -</p>
            <p className="layout_buttom_text2">Suratul Mujadila [Q58vs4-9]</p>
          </div>
          <BiShareAlt className="layout_buttom_share" />
          <div className="layout_buttom_play_wrap">
            <FaPlay className="layout_buttom_play_icon" />
          </div>
        </div>
        <div className="layout_buttom_menue2">
          <div className="layout_buttom_menue2_home">
            <FaHome className="layout_buttom_menue2_homeIcon" />
            <p className="layout_buttom_menue2_homeText">Home</p>
          </div>
          <div className="layout_buttom_menue2_library">
            <SiApplemusic className="layout_buttom_menue2_libraryIcon" />
            <p className="layout_buttom_menue2_libraryText">Library</p>
          </div>
          <div className="layout_buttom_menue2_favourite">
            <MdFavorite className="layout_buttom_menue2_favouriteIcon" />
            <p className="layout_buttom_menue2_favouriteText">Favorites</p>
          </div>
        </div>
      </div>
      {/* ----------------Mobile Buttom menue ends------------------- */}
    </div>
  );
};

export default Layout;
