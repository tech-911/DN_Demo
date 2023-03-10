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
          <GroupWidget data={data} heading="Recent" type={"album"} />
        </div>
        <div className="landing_trending landing_space">
          <GroupWidget data={data} heading="Trending" type={"album"} />
        </div>
        <div className="landing_tafsir landing_space">
          <GroupWidget data={data} heading="Ramadan Tafsir" type={"album"} />
        </div>
        <div className="landing_quran landing_space">
          <GroupWidget data={data} heading="Quran Recitations" type={"album"} />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
