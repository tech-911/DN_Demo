import React, { useEffect, useState } from "react";
import "./recommend1.scss";
import Container from "../../components/container/Container";
import axios from "axios";
import { categories } from "./data";
import FilterButton from "../../components/filterButton/FilterButton";
import Recommend_widget from "../../components/recommend_widget/Recommend_widget";
const Recommend1 = () => {
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
      <div className="recommend1_wrapper">
        <div className="recommend1_filter_categories">
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
        <div className="recommend1_content">
          {" "}
          {filter.map(({ img, categories, title }, idx) => {
            return <Recommend_widget />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Recommend1;
