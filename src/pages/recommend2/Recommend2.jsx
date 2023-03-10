import React, { useEffect, useState } from "react";
import "./recommend2.scss";
import Container from "../../components/container/Container";
import AlbumWidget from "../../components/albumWidget/AlbumWidget";
import axios from "axios";

const Recommend2 = () => {
  const [data, setData] = useState([]);
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
        {data.map(({ categories, img }, idx) => {
          return <AlbumWidget key={idx} categories={categories} img={img} />;
        })}
      </div>
    </Container>
  );
};

export default Recommend2;
