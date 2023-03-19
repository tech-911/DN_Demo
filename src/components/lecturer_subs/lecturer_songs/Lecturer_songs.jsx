import React, { useEffect, useState } from "react";
import axios from "axios";
import MusicList from "../../../components/musicList/MusicList";
import "./lecturer_song.scss";
import { SlEmotsmile } from "react-icons/sl";

const Lecturer_songs = () => {
  const [data, setData] = useState([]);
  const [drop, setDrop] = useState("");

  useEffect(() => {
    axios
      .get("https://www.dawahbox.com/mongo/api/leclisting_page_api.php?page=2")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="lecsong_wrapper">
      <div className="lecsong_title_wrap">
        <div className="lecsong_title1">
          <p className="lecsong_hash">#</p>
          <p>Title</p>
        </div>
        <p className="lecsong_title2">Lecturer</p>
        <p className="lecsong_title3"></p>
        <p className="lecsong_title4">Time</p>
      </div>
      <div className="lecsong_content">
        {data.map(({ title, rp, img }, idx) => {
          return (
            <div key={idx} className="lecsong_content_item">
              <MusicList
                key={idx}
                id={idx}
                img={img}
                title={title}
                lecturer={rp}
                drop={drop}
                setDrop={setDrop}
              />
            </div>
          );
        })}
      </div>
      <div className="lecsong_comments">
        <h1 className="lecsong_comments_header">Comments</h1>
        <textarea
          className="lecsong_comment_input"
          placeholder="Pls share your thoughts"
          name=""
          id=""
          cols="30"
          rows="5"
          maxLength="500"
        ></textarea>
        <div className="lecsong_comment_action">
          <SlEmotsmile className="lecsong_comment_moji" />
          <button className="lecsong_comment_button">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Lecturer_songs;
