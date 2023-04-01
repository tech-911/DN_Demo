import React, { useState, useEffect } from "react";
import "./playlists.scss";
import Container from "../../components/container/Container";
import { categories, language } from "./data";
import FilterButton from "../../components/filterButton/FilterButton";
import axios from "axios";
import AlbumWidget from "../../components/albumWidget/AlbumWidget";
import { useNavigate } from "react-router-dom";
import HeaderRouter from "../../components/headerRouter/HeaderRouter";

const Playlists = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [active, setActive] = useState("All");
  const [active1, setActive1] = useState("All");
  const [active2, setActive2] = useState("");
  const [catid, setCatid] = useState("40217");
  const [langid, setLangid] = useState("6");
  const navigate = useNavigate();

  useEffect(() => {
    setData3(data);
  }, [data]);

  useEffect(() => {
    const handleRequest = () => {
      let hold = [];
      let countloop = 0;
      for (let i = 1; i <= 10; i++) {
        axios
          .get(
            `http://www.dawahbox.com/mongo/api/leclisting_cat_api.php?page=${i}&langid=${langid}&catid=${catid}`
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
  }, [catid, langid]);
  // console.log(filter);
  return (
    <Container>
      <div className="playlist_wrapper">
        <div>
          <HeaderRouter title={"Playlist"} />
        </div>
        <div className="playlist_filter">
          <div className="playlist_filter_categories">
            {categories.map(({ cats, id }, idx) => {
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
                  title={cats}
                  action="categories"
                  data={data}
                  id={id}
                  setCatid={setCatid}
                />
              );
            })}
          </div>
          <div className="playlist_filter_language">
            {language.map(({ language, lid }, idx) => {
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
                  lid={lid}
                  setLangid={setLangid}
                />
              );
            })}
          </div>
        </div>
        <div className="playlist_widget">
          {filter.map((value, idx) => {
            const { img, rpname, title, categories, cats, nid, audio } = value;
            const catsname = Object.values(value)[3];
            return (
              <div
                key={idx + 1}
                onClick={() => {
                  navigate("/audiodetail", {
                    state: {
                      title: title,
                      rpname,
                      img,
                      cats: catsname,
                      nid,
                      audio,
                      nav1: { title: "Playlists", link: "/playlists" },
                    },
                  });
                }}
                className="playlist_lists_items"
              >
                <AlbumWidget key={idx} categories={catsname} img={img} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Playlists;
