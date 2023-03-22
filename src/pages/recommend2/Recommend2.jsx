import React, { useEffect, useState } from "react";
import "./recommend2.scss";
import Container from "../../components/container/Container";
import AlbumWidget from "../../components/albumWidget/AlbumWidget";
import { recommended2Data } from "./data";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Recommend2 = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
    <Container>
      <div className="recommend2_wrapper">
        {recommended2Data.map(({ cats, img, title, rpname, nid }, idx) => {
          return (
            <div
              onClick={() => {
                navigate(`/audiodetail`, {
                  state: { title: title, rpname, img, cats, nid },
                });
              }}
              key={idx}
              className="recommended2_album_wrap"
            >
              <AlbumWidget key={idx} categories={cats} img={img} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Recommend2;
