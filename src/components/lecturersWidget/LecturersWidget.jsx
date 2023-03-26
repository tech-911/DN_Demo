import React from "react";
import "./lecturersWidget.scss";
import { FiHeadphones } from "react-icons/fi";

const LecturersWidget = ({ img, rp }) => {
  return (
    <div className="lecturerWidget_wrapper">
      <div className="lecturerWidget_circle">
        <img className="lecturerWidget_img" src={img} alt="circleImg" />
      </div>
      <p className="lecturerWidget_text">
        {`${rp.split(" ")[0]} ${rp.split(" ")[1]}`}
      </p>
      <div className="lecturerWidget_views_wrapper">
        <FiHeadphones className="lecturerWidget_views_icon" />
        <p className="lecturerWidget_views_text">12k</p>
      </div>
    </div>
  );
};

export default LecturersWidget;
