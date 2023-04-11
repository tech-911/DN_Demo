import React from "react";
import "./genres.scss";
import Container from "../../components/container/Container";
import { genreData } from "./data";
import { useNavigate } from "react-router-dom";
import HeaderRouter from "../../components/headerRouter/HeaderRouter";

const Genres = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="genre_wrapper">
        <div className="genre_header_link">
          <HeaderRouter title={"Genres"} />
        </div>

        <div className="genre_lists">
          {genreData.map(({ title, rpname, img, cats, nid, audio }, idx) => {
            return (
              <div
                onClick={() => {
                  navigate("/audiodetail", {
                    state: {
                      title: title,
                      rpname,
                      img,
                      cats,
                      nid,
                      audio,
                      controlData: genreData,
                    },
                  });
                }}
                key={idx + 1}
                className="genre_img_wrap"
              >
                <img
                  className="genre_img"
                  key={idx}
                  src={img}
                  alt={`genre${nid}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Genres;
