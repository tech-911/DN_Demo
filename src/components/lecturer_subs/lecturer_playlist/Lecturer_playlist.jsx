import React, { useEffect, useState } from "react";
import AlbumWidget from "../../../components/albumWidget/AlbumWidget";
import axios from "axios";
import "./lecturerplaylist.scss";
import { SlEmotsmile } from "react-icons/sl";

const Lecturer_playlist = () => {
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
    <>
      <div className="lecplaylist_wrapper">
        {data.map(({ categories, img }, idx) => {
          return <AlbumWidget key={idx} categories={categories} img={img} />;
        })}
      </div>
      <div className="lecplaylist_comments">
        <h1 className="lecplaylist_comments_header">Comments</h1>
        <textarea
          className="lecplaylist_comment_input"
          placeholder="Pls share your thoughts"
          name=""
          id=""
          cols="30"
          rows="5"
          maxLength="500"
        ></textarea>
        <div className="lecplaylist_comment_action">
          <SlEmotsmile className="lecplaylist_comment_moji" />
          <button className="lecplaylist_comment_button">Comment</button>
        </div>
      </div>
    </>
  );
};

export default Lecturer_playlist;
