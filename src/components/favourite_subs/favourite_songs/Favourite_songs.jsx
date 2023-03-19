import React from "react";
import empty from "../../../assets/png/musicEmptyState.png";
import "./favourite_song.scss";

const Favourite_songs = () => {
  return (
    <div className="favsongs_wrapper">
      <div className="favsongs_img_wrap">
        <img src={empty} alt="empty" />
        <p className="favsongs_text">
          You haven’t created any playlists. Create your own playlists here.
        </p>
      </div>
      <button className="favsongs_button">Discover more songs</button>
    </div>
  );
};

export default Favourite_songs;
