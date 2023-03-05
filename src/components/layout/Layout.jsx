import React, { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import SideNav from "../../components/sideNav/SideNav";

export const NavContext = createContext();

const Layout = () => {
  const [res, setRes] = useState(() => {
    return Number(localStorage.getItem("navControl")) || 1;
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
    </div>
  );
};

export default Layout;
