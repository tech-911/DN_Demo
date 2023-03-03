import React from "react";
import "./layout.scss";
import Nav from "../components/nav/Nav.jsx";
import Footer from "../components/footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="layout_wrapper">
      <Nav />
      <div className="layout_child">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
