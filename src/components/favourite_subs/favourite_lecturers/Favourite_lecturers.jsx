import React from "react";
import empty from "../../../assets/png/musicEmptyState.png";
import "./favourite_lecturers.scss";

const Favourite_lecturers = () => {
  return (
    <div className="favlec_wrapper">
      <div className="favlec_img_wrap">
        <img src={empty} alt="empty" />
        <p className="favlec_text">
          You haven’t created any playlists. Create your own playlists here.
        </p>
      </div>
      <button className="favlec_button">Discover more songs</button>
    </div>
  );
};

export default Favourite_lecturers;
