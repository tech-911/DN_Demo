import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoWidget from "../../../components/videoWidget/VideoWidget";
import { SlEmotsmile } from "react-icons/sl";
import "./lecturervideos.scss";

const Lecturer_videos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.dawahbox.com/mongo/api/albumlisting_page_api.php?page=3&lim=10&langid=7"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="lecvid_wrapper">
      <div className="lecvid_widget">
        {data.map(({ img, categories, title }, idx) => {
          return (
            <VideoWidget
              key={idx}
              title={title}
              lecturer={categories}
              img={img}
            />
          );
        })}
      </div>
      <div className="lecvid_comments">
        <h1 className="lecvid_comments_header">Comments</h1>
        <textarea
          className="lecvid_comment_input"
          placeholder="Pls share your thoughts"
          name=""
          id=""
          cols="30"
          rows="5"
          maxLength="500"
        ></textarea>
        <div className="lecvid_comment_action">
          <SlEmotsmile className="lecvid_comment_moji" />
          <button className="lecvid_comment_button">Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Lecturer_videos;
