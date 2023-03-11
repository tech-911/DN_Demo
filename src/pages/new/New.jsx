import React, { useEffect, useState } from "react";
import "./new.scss";
import Container from "../../components/container/Container";
import axios from "axios";
import MusicList from "../../components/musicList/MusicList";

const New = () => {
  const [data, setData] = useState([]);
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
    <Container>
      <div className="new_wrapper">
        <div className="new_title_wrap">
          <div className="new_title1">
            <p className="new_hash">#</p>
            <p>Title</p>
          </div>
          <p className="new_title2">Lecturer</p>
          <p className="new_title3"></p>
          <p className="new_title4">Time</p>
        </div>
        <div className="new_content">
          {data.map(({ title, rp }, idx) => {
            return <MusicList key={idx} id={idx} title={title} lecturer={rp} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default New;
