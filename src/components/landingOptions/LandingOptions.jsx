import React from "react";
import "./landingOptions.scss";

const LandingOptions = ({ icon, text }) => {
  return (
    <div className="landop_wrapper">
      <div className="landop_widget">{icon}</div>
      <p className="landop_text">{text}</p>
    </div>
  );
};

export default LandingOptions;
