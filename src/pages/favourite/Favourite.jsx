import React, { useState } from "react";
import "./favourite.scss";
import Container from "../../components/container/Container";
import Favourite_album from "../../components/favourite_subs/favourite_albums/Favourite_album";
import Favourite_songs from "../../components/favourite_subs/favourite_songs/Favourite_songs";
import Favourite_playlist from "../../components/favourite_subs/favourite_playlist/Favourite_playlist";
import Favourite_lecturers from "../../components/favourite_subs/favourite_lecturers/Favourite_lecturers";

const Favourite = () => {
  const [tab, setTab] = useState(1);

  return (
    <Container>
      <div className="fav_wrapper">
        <div className="fav_tab_wrap">
          <div className="fav_tab">
            <div
              onClick={() => {
                setTab(1);
              }}
              className="fav_tab_song"
            >
              <p
                className={`${
                  tab === 1 ? "fav_tab_song1_active" : "fav_tab_song1"
                }`}
              >
                Songs
              </p>
              <p
                className={`${
                  tab === 1 ? "fav_tab_song2_active" : "fav_tab_song2"
                }`}
              >{`(59)`}</p>
            </div>
            <div
              onClick={() => {
                setTab(2);
              }}
              className="fav_tab_album"
            >
              <p
                className={`${
                  tab === 2 ? "fav_tab_album1_active" : "fav_tab_album1"
                }`}
              >
                Album
              </p>
              <p
                className={`${
                  tab === 2 ? "fav_tab_album2_active" : "fav_tab_album2"
                }`}
              >{`(12)`}</p>
            </div>
            <div
              onClick={() => {
                setTab(3);
              }}
              className="fav_tab_playlist"
            >
              <p
                className={`${
                  tab === 3 ? "fav_tab_playlist1_active" : "fav_tab_playlist1"
                }`}
              >
                Playlist
              </p>
              <p
                className={`${
                  tab === 3 ? "fav_tab_playlist2_active" : "fav_tab_playlist2"
                }`}
              >{`(10)`}</p>
            </div>
            <div
              onClick={() => {
                setTab(4);
              }}
              className="fav_tab_video"
            >
              <p
                className={`${
                  tab === 4 ? "fav_tab_video1_active" : "fav_tab_video1"
                }`}
              >
                Lecturers
              </p>
            </div>
          </div>
        </div>
        {tab === 1 && <Favourite_songs />}
        {tab === 2 && <Favourite_album />}
        {tab === 3 && <Favourite_playlist />}
        {tab === 4 && <Favourite_lecturers />}
      </div>
    </Container>
  );
};

export default Favourite;
