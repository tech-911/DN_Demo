import React from "react";
import "./genres.scss";
import Container from "../../components/container/Container";
import { genreData } from "./data";
import { useNavigate } from "react-router-dom";

const Genres = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="genre_wrapper">
        <div className="genre_lists">
          {genreData.map(({ title, rpname, img, cats, nid }, idx) => {
            return (
              <div
                onClick={() => {
                  navigate("/audiodetail", {
                    state: { title: title, rpname, img, cats, nid },
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
