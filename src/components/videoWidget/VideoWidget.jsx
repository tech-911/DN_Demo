import React from "react";
import "./videoWidget.scss";
import { FaPlay } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import videoButtom from "../../assets/png/videoButtom.png";

const VideoWidget = ({ img, lecturer, title }) => {
  return (
    <div className="videoWidget_wrapper">
      <div className="videoWidget_top">
        <img
          src={img}
          alt="background"
          className="videoWidget_background_image"
        />
        <div className="videoWidget_play">
          <FaPlay className="videoWidget_play_icon" />
        </div>
        <div className="videoWidget_duration">
          <p className="videoWidget_duration_text">02:25</p>
        </div>
      </div>
      <div className="videoWidget_buttom">
        <div className="videoWidget_buttom_left">
          <marquee direction="left" className="videoWidget_buttom_head">
            {title}
          </marquee>
          <div className="videoWidget_buttom_lecturer_wrapper">
            <img src={videoButtom} alt="videoButtom" />
            <p className="videoWidget_buttom_lecturer">{lecturer}</p>
          </div>
        </div>
        <div className="videoWidget_buttom_right">
          <BiHeart className="videoWidget_buttom_right_icon" />
          <p className="videoWidget_buttom_right_text">1.5k</p>
        </div>
      </div>
    </div>
  );
};

export default VideoWidget;
