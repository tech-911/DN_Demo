import React, { useState, useEffect } from "react";
import "./videos.scss";
import Container from "../../components/container/Container";
import { categories } from "./data";
import axios from "axios";
import FilterButton from "../../components/filterButton/FilterButton";
import VideoWidget from "../../components/videoWidget/VideoWidget";
import HeaderRouter from "../../components/headerRouter/HeaderRouter";

const Videos = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [active, setActive] = useState("All");
  const [active1, setActive1] = useState("");
  const [active2, setActive2] = useState("");

  useEffect(() => {
    setData3(data);
  }, [data]);

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
      <div className="video_wrapper">
        <div>
          <HeaderRouter title={"Videos"} />
        </div>
        <div className="video_filter">
          <div className="video_filter_categories">
            {categories.map(({ categories, id }, idx) => {
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
                  title={categories}
                  action="categories"
                  data={data}
                />
              );
            })}
          </div>
        </div>
        <div className="video_widget">
          {filter.map(({ img, categories, title }, idx) => {
            return (
              <VideoWidget
                key={idx}
                title={title}
                lecturer={categories}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Videos;
