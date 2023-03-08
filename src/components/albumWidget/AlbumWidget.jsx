import React from "react";
import "./albumWidget.scss";
import { FiHeadphones } from "react-icons/fi";

const AlbumWidget = ({ categories, img }) => {
  return (
    <div className="album_wrapper">
      <div className="album_container">
        <img src={img} alt="background" className="album_background_image" />
        <div className="album_overlay"></div>
        <p className="album_widget_name">DN</p>
        <div className="album_listen_wrapper">
          <FiHeadphones className="album_listen_icon" />
          <p className="album_listen_text">1.3k</p>
        </div>
      </div>
      <p className="album_categories">{categories}</p>
    </div>
  );
};

export default AlbumWidget;
