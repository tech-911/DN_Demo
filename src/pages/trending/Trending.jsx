import React, { useEffect, useState } from "react";
import "./trending.scss";
import Container from "../../components/container/Container";
import axios from "axios";
import MusicList from "../../components/musicList/MusicList";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [data, setData] = useState([]);
  const [drop, setDrop] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "http://www.dawahbox.com/mongo/api/popular_lec_api.php?langid=6&lim=100"
      )
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
          {data.map(({ Title, rpname, img, cats, nid }, idx) => {
            return (
              <div
                onClick={() => {
                  navigate(`/audiodetail`, {
                    state: { title: Title, rpname, img, cats, nid },
                  });
                }}
                key={idx}
                className="trend_content_item"
              >
                <MusicList
                  key={idx}
                  id={idx}
                  img={img}
                  title={Title}
                  lecturer={rpname}
                  drop={drop}
                  setDrop={setDrop}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Trending;
