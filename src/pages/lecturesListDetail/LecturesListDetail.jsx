import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import axios from "axios";
import MusicList from "../../components/musicList/MusicList";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import "./lecturesListDetail.scss";
import HeaderRouter from "../../components/headerRouter/HeaderRouter";

const LecturesListDetail = () => {
  const [data, setData] = useState([]);
  const [drop, setDrop] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    title,
    rpname,
    img,
    cats,
    nid,
    audio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  } = state;

  useEffect(() => {
    axios
      .get(`https://www.dawahbox.com/mongo/api/albumapi3.php?aid=${nid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <div className="songlidet_wrapper">
        <div className="songlidet_title_res_wrap">
          <HeaderRouter title={"Lectures Lists"} />
        </div>
        <div className="songlidet_title_wrap">
          <div className="songlidet_title1">
            <p className="songlidet_hash">#</p>
            <p>Title</p>
          </div>
          <p className="songlidet_title2">Lecturer</p>
          <p className="songlidet_title3"></p>
          <p className="songlidet_title4">Time</p>
        </div>
        <div className="songlidet_content">
          {data.map(
            (
              { Title, title, rpname, rp, img, cats, categories, nid, lec_img },
              idx
            ) => {
              return (
                <div key={idx} className="songlidet_content_item">
                  <MusicList
                    key={idx}
                    id={idx}
                    title={Title || title}
                    lecturer={rpname || rp}
                    drop={drop}
                    setDrop={setDrop}
                    nid={nid}
                    image={img || lec_img}
                    url="/audiodetail"
                    Title={Title}
                    rpname={rpname}
                    cats={cats}
                    navName={"Back"}
                    navLink={-1}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </Container>
  );
};

export default LecturesListDetail;
