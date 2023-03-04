import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import SideNav from "../../components/sideNav/SideNav";

const Layout = () => {
  return (
    <div className="layout_wrapper">
      <div className="layout_sidenav">
        <SideNav />
      </div>
      <div className="layout_outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
