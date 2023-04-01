import React from "react";
import { FiHeadphones } from "react-icons/fi";
import "./simrpWidget.scss";
const SimrpWidget = ({ img, rp }) => {
  return (
    <div className="simrpwid_wrapper">
      <div className="simrpwid_circle">
        <img className="simrpwid_img" src={img} alt="circleImg" />
      </div>
      <p className="simrpwid_text">
        {rp ? `${rp.split(" ")[0]} ${rp.split(" ")[1]}` : "undefined"}
      </p>
    </div>
  );
};

export default SimrpWidget;
