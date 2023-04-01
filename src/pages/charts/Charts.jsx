import React, { useState, useEffect } from "react";
import "./charts.scss";
import Container from "../../components/container/Container";
import axios from "axios";
import GroupWidget from "../../components/groupWidget/GroupWidget";
import HeaderRouter from "../../components/headerRouter/HeaderRouter";

const Charts = () => {
  const [weeklyCharts, setWeeklyCharts] = useState([]);
  const [monthlyCharts, setMonthlyCharts] = useState([]);
  const [dailyCharts, setDailyCharts] = useState([]);
  const [weeklylecturers, setWeeklylecturers] = useState([]);
  const [weeklyalbums, setWeeklyalbums] = useState([]);
  useEffect(() => {
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
    axios
      .get(
        "https://www.dawahbox.com/mongo/api/popular_lec_api.php?langid=6&lim=20"
      )
      .then((res) => {
        setWeeklylecturers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "https://www.dawahbox.com/mongo/api/albumlisting_page_api.php?page=7&lim=10&langid=6"
      )
      .then((res) => {
        setWeeklyalbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <div className="charts_wrapper">
        <div>
          <HeaderRouter title={"Charts"} />
        </div>

        <div className="charts_recent charts_space">
          {" "}
          <GroupWidget
            data={weeklyCharts}
            heading="Weekly Charts"
            type={"album"}
            navLinking={"/lecturesdetail"}
            nav1={{ title: "Charts", link: "/charts" }}
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
            nav1={{ title: "Charts", link: "/charts" }}
          />
        </div>
        <div className="charts_tafsir charts_space">
          <GroupWidget
            data={weeklylecturers}
            heading="Weekly Top Lecturers"
            type={"lecturer"}
            navLinking={"/lecturerdetail"}
            nav1={{ title: "Charts", link: "/charts" }}
          />
        </div>
        <div className="charts_quran charts_space">
          <GroupWidget
            data={weeklyalbums}
            heading="Weekly Top Album"
            type={"album"}
            navLinking={"/lecturesdetail"}
            nav1={{ title: "Charts", link: "/charts" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Charts;
