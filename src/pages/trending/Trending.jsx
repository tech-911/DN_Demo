import React, { useEffect, useState } from "react";
import "./trending.scss";
import Container from "../../components/container/Container";
import axios from "axios";
import MusicList from "../../components/musicList/MusicList";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

const Trending = () => {
  const [data, setData] = useState([]);
  const [drop, setDrop] = useState("");
  const navigate = useNavigate();
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
      <div className="trend_wrapper">
        <div className="trend_title_res_wrap">
          <MdOutlineKeyboardArrowLeft
            onClick={() => {
              navigate("/");
            }}
            className="trending_title_res_icon"
          />
          <p className="trending_title_res_text">Trending</p>
        </div>
        <div className="trend_title_wrap">
          <div className="tend_title1">
            <p className="tend_hash">#</p>
            <p>Title</p>
          </div>
          <p className="tend_title2">Lecturer</p>
          <p className="tend_title3"></p>
          <p className="tend_title4">Time</p>
        </div>
        <div className="trend_content">
          {data.map(({ title, rp, img }, idx) => {
            return (
              <MusicList
                key={idx}
                id={idx}
                img={img}
                title={title}
                lecturer={rp}
                drop={drop}
                setDrop={setDrop}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Trending;
