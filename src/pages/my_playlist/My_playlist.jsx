import React from "react";
import "./myplaylist.scss";
import empty from "../../assets/png/musicEmptyState.png";
import Container from "../../components/container/Container";

const My_playlist = () => {
  return (
    <Container>
      <div className="myplay_wrapper">
        <div className="myplay_img_wrap">
          <img src={empty} alt="empty" />
          <p className="myplay_text">
            You haven’t created any playlists. Create your own playlists here.
          </p>
        </div>
        <button className="myplay_button">Add Playlist</button>
      </div>
    </Container>
  );
};

export default My_playlist;
