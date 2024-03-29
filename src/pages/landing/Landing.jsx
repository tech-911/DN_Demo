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
import { optiondata } from "./optiondata";
import LandingOptions from "../../components/landingOptions/LandingOptions";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const [recent, setRecent] = useState([]);
  const [trending, setTrending] = useState([]);
  const [ramadan, setRamadan] = useState([]);
  const [quran, setQuran] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://www.dawahbox.com/mongo/api/popular_lec_api.php?langid=6&lim=20"
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
        "https://www.dawahbox.com/mongo/api/leclistingapi.php?lim=3000&langid=6"
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
        "https://www.dawahbox.com/mongo/api/leclistingapi.php?lim=1000&langid=6"
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
  const settings1 = {
    dots: false,
    infinite: false,
    autoplay: false,
    fade: false,
    speed: 500,
    slidesToShow: 6,
    swipeToSlide: true,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="landing_wrapper">
        <Slider className="landing_carousel landing_space" {...settings}>
          <img className="landing_carousel_img" src={img1} alt="1" />
          <img className="landing_carousel_img" src={img2} alt="2" />
          <img className="landing_carousel_img" src={img3} alt="3" />
        </Slider>
        <Slider className="landing_options" {...settings1}>
          {optiondata.map(({ icon, link, text }, idx) => {
            return (
              <div
                onClick={() => {
                  navigate(link);
                }}
                className="landing_option"
                key={idx + 1}
              >
                <LandingOptions key={idx} icon={icon} text={text} />
              </div>
            );
          })}
        </Slider>

        <div className="landing_recent landing_space">
          {" "}
          <GroupWidget
            data={recent}
            heading="Recent"
            type={"album"}
            navLinking={"/audiodetail"}
            nav1={{ title: "Home", link: "/home" }}
          />
        </div>
        <div className="landing_trending landing_space">
          <GroupWidget
            data={trending}
            heading="Trending"
            type={"album"}
            navLinking={"/audiodetail"}
            nav1={{ title: "Home", link: "/home" }}
          />
        </div>
        <div className="landing_tafsir landing_space">
          <GroupWidget
            data={ramadan}
            heading="Ramadan Tafsir"
            type={"album"}
            navLinking={"/audiodetail"}
            nav1={{ title: "Home", link: "/home" }}
          />
        </div>
        <div className="landing_quran landing_space">
          <GroupWidget
            data={quran}
            heading="Quran Recitations"
            type={"album"}
            navLinking={"/audiodetail"}
            nav1={{ title: "Home", link: "/home" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
