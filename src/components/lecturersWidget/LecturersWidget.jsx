import React from "react";
import "./lecturersWidget.scss";
import { FiHeadphones } from "react-icons/fi";

const LecturersWidget = ({ img, rp }) => {
  return (
    <>
      <div className="lecturerWidget_wrapper">
        <div className="lecturerWidget_circle">
          <img className="lecturerWidget_img" src={img} alt="circleImg" />
        </div>
        <p className="lecturerWidget_text">
          {rp ? `${rp.split(" ")[0]} ${rp.split(" ")[1]}` : "undefined"}
        </p>
        <div className="lecturerWidget_views_wrapper">
          <FiHeadphones className="lecturerWidget_views_icon" />
          <p className="lecturerWidget_views_text">12k</p>
        </div>
      </div>
      {/* -----------------responsive lecturer widget----------------- */}
      <div className="lecwidres_wrapper">
        <div className="lecwidres_img_wrap">
          <img className="lecwidres_img" src={img} alt="lecturer image" />
        </div>
        <p className="lecwidres_text">
          {rp
            ? `${rp.split(" ")[0]} ${rp.split(" ")[1]} ${rp.split(" ")[2]}`
            : "undefined"}
        </p>
      </div>
      {/* -----------------responsive lecturer widget Ends----------------- */}
    </>
  );
};

export default LecturersWidget;
