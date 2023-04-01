import React, { useEffect, useState } from "react";
import axios from "axios";
import MusicList from "../../../components/musicList/MusicList";
import "./lecturer_song.scss";
import { SlEmotsmile } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Lecturer_songs = ({ id, setCount1, count1, rpname, setImg }) => {
  const [data, setData] = useState([]);
  const [drop, setDrop] = useState("");
  const [rpid, setRpid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCount1(data.length);
  }, [data]);

  useEffect(() => {
    axios
      .get("https://dawahnigeria.com/dawahcast/dboxapi/rpjson")
      .then((res) => {
        const value = res.data.rp.filter((value) => {
          return value.name === rpname;
        })[0];
        setRpid(value.id);
        setImg(value.img);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    const handleRequest = () => {
      let hold = [];
      let countloop = 0;
      for (let i = 1; i <= 20; i++) {
        axios
          .get(
            `http://www.dawahbox.com/mongo/api/leclisting_rp.php?page=${i}&rpid=${
              id || rpid
            }`
          )
          .then((res) => {
            countloop++;
            hold = [...hold, ...res.data];
            if (countloop === 20 && hold.length !== 0) {
              setData([...hold]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    handleRequest();
  }, [rpid]);
  // console.log(setCount1);
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
        {data.map(({ title, rp, rpname, img, cats, nid }, idx) => {
          return (
            <div
              onClick={() => {
                navigate(`/audiodetail`, {
                  state: {
                    title,
                    rpname,
                    img,
                    cats,
                    nid,
                    nav1: { title: "Lecturers", link: "/lecturers" },
                  },
                });
              }}
              key={idx}
              className="lecsong_content_item"
            >
              <MusicList
                key={idx}
                id={idx}
                img={img}
                title={title}
                lecturer={rpname || rp}
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
