import React, { useEffect, useState } from "react";
import "./recommend1.scss";
import Container from "../../components/container/Container";
import axios from "axios";
import { categories } from "./data";
import FilterButton from "../../components/filterButton/FilterButton";
import Recommend_widget from "../../components/recommend_widget/Recommend_widget";
import { useNavigate } from "react-router-dom";
import HeaderRouter from "../../components/headerRouter/HeaderRouter";
const Recommend1 = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [active, setActive] = useState("All");
  const [catid, setCatid] = useState("26");
  const [active1, setActive1] = useState("");
  const [active2, setActive2] = useState("");
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
            `http://www.dawahbox.com/mongo/api/leclisting_cat_api.php?page=${i}&langid=6&catid=${catid}`
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
      // console.log("hold line 40", hold);

      // console.log("data line 42: ", data);
    };

    handleRequest();
  }, [catid]);

  return (
    <Container>
      <div className="recommend1_wrapper">
        <div>
          <HeaderRouter title={"Buzz"} />
        </div>
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
                id={id}
                setCatid={setCatid}
              />
            );
          })}
        </div>
        <div className="recommend1_content">
          {" "}
          {filter.map((value, idx) => {
            const { img, rpname, title, categories, nid, audio } = value;
            const catsname = Object.values(value)[3];

            return (
              <div
                onClick={() => {
                  navigate("/audiodetail", {
                    state: {
                      title: title,
                      rpname,
                      img,
                      cats: catsname,
                      nid,
                      audio,
                      nav1: { title: "Buzz", link: "/recommend1" },
                    },
                  });
                }}
                className="recommend1_item_listing"
              >
                <Recommend_widget
                  key={idx}
                  img={img}
                  title={title}
                  rpname={rpname}
                  catsname={catsname}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Recommend1;
