import React, { useState, useEffect } from "react";
import "./lecturers.scss";
import Container from "../../components/container/Container";
import FilterButton from "../../components/filterButton/FilterButton";
import { lecturers, language, alphabet } from "./data";
import LecturersWidget from "../../components/lecturersWidget/LecturersWidget";
import axios from "axios";

const Lecturers = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [filter, setFilter] = useState([]);
  const [active, setActive] = useState("");
  const [active1, setActive1] = useState("");
  const [active2, setActive2] = useState("");

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
      <div className="lecturers_wrapper">
        <div className="lecturers_filter">
          <div className="lecturers_filter_name">
            {lecturers.map(({ lecturer, id }, idx) => {
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
                  action="name"
                  data={data}
                />
              );
            })}
          </div>
          <div className="lecturers_filter_language">
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
          <div className="lecturers_filter_alphabet">
            {alphabet.map(({ alphabet, id }, idx) => {
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
                  active={active2}
                  setActive={setActive2}
                  title={alphabet}
                  action="alphabet"
                  data={data}
                />
              );
            })}
          </div>
        </div>
        <div className="lecturers_widget">
          {filter.length === 0
            ? data.map(({ img, rp }, idx) => {
                return <LecturersWidget key={idx} img={img} rp={rp} />;
              })
            : filter.map(({ img, rp }, idx) => {
                return <LecturersWidget key={idx} img={img} rp={rp} />;
              })}
        </div>
      </div>
    </Container>
  );
};

export default Lecturers;
