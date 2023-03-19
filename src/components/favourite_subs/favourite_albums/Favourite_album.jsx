import React from "react";
import empty from "../../../assets/png/musicEmptyState.png";
import "./favourite_album.scss";

const Favourite_album = () => {
  return (
    <div className="favalbum_wrapper">
      <div className="favalbum_img_wrap">
        <img src={empty} alt="empty" />
        <p className="favalbum_text">
          You haven’t created any playlists. Create your own playlists here.
        </p>
      </div>
      <button className="favalbum_button">Discover more songs</button>
    </div>
  );
};

export default Favourite_album;
