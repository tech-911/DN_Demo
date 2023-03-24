import React, { useEffect, useState } from "react";
import "./landing.scss";
import Container from "../../components/container/Container";
import GroupWidget from "../../components/groupWidget/GroupWidget";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/png/home_slider_images/big 1.png";
import img2 from "../../assets/png/home_slider_images/bigger 1.png";
import img3 from "../../assets/png/home_slider_images/biggest 1.png";

const Landing = () => {
  const [recent, setRecent] = useState([]);
  const [trending, setTrending] = useState([]);
  const [ramadan, setRamadan] = useState([]);
  const [quran, setQuran] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://www.dawahbox.com/mongo/api/popular_lec_api.php?langid=6&lim=20"
      )
      .then((res) => {
        setRecent(res.data);
        // console.log("recent: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        "https://www.dawahbox.com/mongo/api/leclisting_lang.php?page=11&langid=6"
      )
      .then((res) => {
        setTrending(res.data);
        // console.log("trending: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "http://www.dawahbox.com/mongo/api/leclistingapi.php?lim=3000&langid=6"
      )
      .then((res) => {
        setRamadan(
          res.data?.filter((obj) => obj.cat_id[0] == 40217).slice(0, 20)
        );
        // console.log("Ramadan: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "http://www.dawahbox.com/mongo/api/leclistingapi.php?lim=1000&langid=6"
      )
      .then((res) => {
        setQuran(
          res.data
            ?.filter((obj) => obj.cats?.includes("Quran & Tafsir"))
            .slice(0, 20)
        );
        // console.log("Quran: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };

  return (
    <Container>
      <div className="landing_wrapper">
        <Slider className="landing_carousel landing_space" {...settings}>
          <img src={img1} alt="1" />
          <img src={img2} alt="2" />
          <img src={img3} alt="3" />
        </Slider>

        <div className="landing_recent landing_space">
          {" "}
          <GroupWidget
            data={recent}
            heading="Recent"
            type={"album"}
            navLinking={"/audiodetail"}
          />
        </div>
        <div className="landing_trending landing_space">
          <GroupWidget
            data={trending}
            heading="Trending"
            type={"album"}
            navLinking={"/audiodetail"}
          />
        </div>
        <div className="landing_tafsir landing_space">
          <GroupWidget
            data={ramadan}
            heading="Ramadan Tafsir"
            type={"album"}
            navLinking={"/audiodetail"}
          />
        </div>
        <div className="landing_quran landing_space">
          <GroupWidget
            data={quran}
            heading="Quran Recitations"
            type={"album"}
            navLinking={"/audiodetail"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
