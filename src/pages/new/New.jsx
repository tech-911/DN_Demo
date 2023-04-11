import React, { useEffect, useState } from "react";
import "./new.scss";
import Container from "../../components/container/Container";
import axios from "axios";
import MusicList from "../../components/musicList/MusicList";
import { useNavigate } from "react-router-dom";
import HeaderRouter from "../../components/headerRouter/HeaderRouter";

const New = () => {
  const [data, setData] = useState([]);
  const [drop, setDrop] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://www.dawahbox.com/mongo/api/popular_lec_api.php?langid=6&lim=200`
      )
      .then((res) => {
        setData(() => res.data.slice(99, 200));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <div className="new_wrapper">
        <HeaderRouter title={"New"} />
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
          {data.map(({ Title, rpname, img, cats, nid }, idx) => {
            return (
              <div key={idx} className="new_content_item">
                <MusicList
                  key={idx}
                  id={idx}
                  image={img}
                  title={Title}
                  lecturer={rpname}
                  drop={drop}
                  setDrop={setDrop}
                  url="/audiodetail"
                  Title={Title}
                  rpname={rpname}
                  cats={cats}
                  nid={nid}
                  navName={"New"}
                  navLink={"/new"}
                  controlData={data}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default New;
