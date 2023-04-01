import React from "react";
import "./add_playlist.scss";
import empty from "../../assets/png/musicEmptyState.png";
import Container from "../../components/container/Container";
import HeaderRouter from "../../components/headerRouter/HeaderRouter";

const Add_playlist = () => {
  return (
    <Container>
      <div className="addplay_wrapper">
        <div className="addplay_header_link">
          <HeaderRouter title={"Add Playlist"} />
        </div>
        <div className="addplay_img_wrap">
          <img src={empty} alt="empty" />
          <p className="addplay_text">
            You haven’t created any playlists. Create your own playlists here.
          </p>
        </div>
        <button className="addplay_button">Add Playlist</button>
      </div>
    </Container>
  );
};

export default Add_playlist;
