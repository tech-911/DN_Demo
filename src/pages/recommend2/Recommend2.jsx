import React, { useEffect, useState } from "react";
import "./recommend2.scss";
import Container from "../../components/container/Container";
import AlbumWidget from "../../components/albumWidget/AlbumWidget";
import { recommended2Data } from "./data";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderRouter from "../../components/headerRouter/HeaderRouter";

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
  // console.log(r)
  return (
    <Container>
      <div className="recommend2_header_link">
        <HeaderRouter title={"Podcast"} />
      </div>
      <div className="recommend2_wrapper">
        {recommended2Data.map(
          ({ cats, img, title, rpname, nid, cats_name }, idx) => {
            return (
              <div
                onClick={() => {
                  navigate(`/audiodetail`, {
                    state: {
                      title: title,
                      rpname,
                      img,
                      cats,
                      nid,
                      controlData: recommended2Data,
                      nav1: { title: "Podcast", link: "/recommend2" },
                    },
                  });
                }}
                key={idx}
                className="recommended2_album_wrap"
              >
                <AlbumWidget key={idx} categories={cats_name} img={img} />
              </div>
            );
          }
        )}
      </div>
    </Container>
  );
};

export default Recommend2;
