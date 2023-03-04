import React from "react";
import "./container.scss";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer.jsx";

const Container = ({ children }) => {
  return (
    <div className="container_wrapper">
      <Nav />
      <div className="container_child">{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
