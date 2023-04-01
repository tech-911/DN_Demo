import React, { useEffect, useState } from "react";
import AlbumWidget from "../../../components/albumWidget/AlbumWidget";
import axios from "axios";
import "./lecturer_album.scss";
import { SlEmotsmile } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Lecturer_album = ({ id, setCount2, count2, rpname, setImg }) => {
  const [data, setData] = useState([]);
  const [rpid, setRpid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCount2(data.length);
  }, [data]);

  useEffect(() => {
    axios
      .get("https://dawahnigeria.com/dawahcast/dboxapi/rpjson")
      .then((res) => {
        setRpid(
          res.data.rp.filter((value) => {
            return value.name === rpname;
          })[0].id
        );
        setImg(
          res.data.rp.filter((value) => {
            return value.name === rpname;
          })[0].img
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    const handleRequest = () => {
      let hold = [];
      let countloop = 0;
      for (let i = 1; i <= 10; i++) {
        axios
          .get(
            `http://www.dawahbox.com/mongo/api/albumlisting_rp.php?page=${i}&lim=10&rpid=${
              id || rpid
            }`
          )
          .then((res) => {
            countloop++;
            hold = [...hold, ...res.data];
            if (countloop === 10 && hold.length !== 0) {
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
  // console.log(setCount2);

  return (
    <>
      <div className="lecalb_wrapper">
        {data.map(
          (
            {
              categories,
              img,
              name,
              rpname,
              cats,
              nid,
              id,
              audio,
              Title,
              title,
            },
            idx
          ) => {
            return (
              <div
                className="lecalb_album_item"
                onClick={() => {
                  navigate(`/lecturesdetail`, {
                    state: {
                      title: Title || title || name.split(" - ")[0],
                      rpname: name.split(" - ")[1],
                      img,
                      cats: categories,
                      nid: id,
                      audio,
                    },
                  });
                }}
                key={idx + 1}
              >
                <AlbumWidget key={idx} categories={categories} img={img} />
              </div>
            );
          }
        )}
      </div>
      <div className="lecalb_comments">
        <h1 className="lecalb_comments_header">Comments</h1>
        <textarea
          className="lecalb_comment_input"
          placeholder="Pls share your thoughts"
          name=""
          id=""
          cols="30"
          rows="5"
          maxLength="500"
        ></textarea>
        <div className="lecalb_comment_action">
          <SlEmotsmile className="lecalb_comment_moji" />
          <button className="lecalb_comment_button">Comment</button>
        </div>
      </div>
    </>
  );
};

export default Lecturer_album;
