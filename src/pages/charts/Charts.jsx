import React, { useState, useEffect } from "react";
import "./charts.scss";
import Container from "../../components/container/Container";
import axios from "axios";
import GroupWidget from "../../components/groupWidget/GroupWidget";

const Charts = () => {
  const [data, setData] = useState([]);
  const [weeklyCharts, setWeeklyCharts] = useState([]);
  const [monthlyCharts, setMonthlyCharts] = useState([]);
  const [dailyCharts, setDailyCharts] = useState([]);
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
    axios
      .get(
        "https://www.dawahbox.com/mongo/api/albumlisting_page_api.php?page=8&lim=10&langid=6"
      )
      .then((res) => {
        setWeeklyCharts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "https://www.dawahbox.com/mongo/api/albumlisting_page_api.php?page=9&lim=10&langid=6"
      )
      .then((res) => {
        setMonthlyCharts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "https://www.dawahbox.com/mongo/api/albumlisting_page_api.php?page=10&lim=10&langid=6"
      )
      .then((res) => {
        setDailyCharts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <div className="charts_wrapper">
        <div className="charts_recent charts_space">
          {" "}
          <GroupWidget
            data={weeklyCharts}
            heading="Weekly Charts"
            type={"album"}
            navLinking={"/lecturesdetail"}
          />
        </div>
        <div className="charts_trending charts_space">
          <GroupWidget
            data={dailyCharts}
            heading="Daily Charts"
            type={"album"}
            navLinking={"/lecturesdetail"}
          />
        </div>
        <div className="charts_tafsir charts_space">
          <GroupWidget
            data={monthlyCharts}
            heading="Montly Charts"
            type={"album"}
            navLinking={"/lecturesdetail"}
          />
        </div>
        <div className="charts_tafsir charts_space">
          <GroupWidget
            data={data}
            heading="Weekly Top Lecturers"
            type={"lecturer"}
          />
        </div>
        <div className="charts_quran charts_space">
          <GroupWidget data={data} heading="Weekly Top Album" type={"album"} />
        </div>
      </div>
    </Container>
  );
};

export default Charts;
