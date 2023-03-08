import React from "react";
import "./genres.scss";
import Container from "../../components/container/Container";
import { genreData } from "./data";

const Genres = () => {
  return (
    <Container>
      <div className="genre_wrapper">
        {genreData.map(({ id, img }) => {
          return <img key={id} src={img} alt={`genre${id}`} />;
        })}
      </div>
    </Container>
  );
};

export default Genres;
