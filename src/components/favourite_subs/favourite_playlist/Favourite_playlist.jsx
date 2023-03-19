import React from "react";
import empty from "../../../assets/png/musicEmptyState.png";
import "./favouriteplaylist.scss";

const Favourite_playlist = () => {
  return (
    <div className="favplaylist_wrapper">
      <div className="favplaylist_img_wrap">
        <img src={empty} alt="empty" />
        <p className="favplaylist_text">
          You haven’t created any playlists. Create your own playlists here.
        </p>
      </div>
      <button className="favplaylist_button">Discover more songs</button>
    </div>
  );
};

export default Favourite_playlist;
