import React, { useState, useEffect } from "react";
import "./playlists.scss";
import Container from "../../components/container/Container";
import { categories, language } from "./data";
import FilterButton from "../../components/filterButton/FilterButton";
import axios from "axios";
import AlbumWidget from "../../components/albumWidget/AlbumWidget";

const Playlists = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [active, setActive] = useState("All");
  const [active1, setActive1] = useState("");
  const [active2, setActive2] = useState("");

//   useEffect(() => {
//     setData1(data);
//   }, [data]);

  useEffect(() => {
    axios
      .get("https://www.dawahbox.com/mongo/api/leclisting_page_api.php?page=2")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <div className="playlist_wrapper">
        <div className="playlist_filter">
          <div className="playlist_filter_categories">
            {categories.map(({ lecturer, id }, idx) => {
              return (
                <FilterButton
                  key={idx}
                  filter={filter}
                  setFilter={setFilter}
                  data1={data1}
                  setData1={setData1}
                  data2={data2}
                  setData2={setData2}
                  data3={data3}
                  setData3={setData3}
                  active={active}
                  setActive={setActive}
                  title={lecturer}
                  action="categories"
                  data={data}
                />
              );
            })}
          </div>
          <div className="playlist_filter_language">
            {language.map(({ language, id }, idx) => {
              return (
                <FilterButton
                  key={idx}
                  filter={filter}
                  setFilter={setFilter}
                  data1={data1}
                  setData1={setData1}
                  data2={data2}
                  setData2={setData2}
                  data3={data3}
                  setData3={setData3}
                  active={active1}
                  setActive={setActive1}
                  title={language}
                  action="language"
                  data={data}
                />
              );
            })}
          </div>
        </div>
        <div className="playlist_widget">
          {filter.map(({ img, cats }, idx) => {
            return <AlbumWidget key={idx} categories={cats} img={img} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Playlists;
