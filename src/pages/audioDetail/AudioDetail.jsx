import React, { useEffect, useRef, useState } from "react";
import "./audiodetail.scss";
import Container from "../../components/container/Container";
import audioHero from "../../assets/png/detialPagehero.png";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { BiMessageMinus, BiShareAlt, BiPause } from "react-icons/bi";
import { RiDownload2Fill, RiPlayListFill } from "react-icons/ri";
import { FiChevronsRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { SlEmotsmile, SlOptionsVertical, SlArrowDown } from "react-icons/sl";
import { GoDiffAdded } from "react-icons/go";
import { GiPauseButton } from "react-icons/gi";
import {
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
  TbRepeat,
} from "react-icons/tb";
import GroupWidget from "../../components/groupWidget/GroupWidget";
import axios from "axios";
import Disk from "../../assets/png/Disk_tranparent.png";

const AudioDetail = () => {
  const { state } = useLocation();
  let { nid, nav1, controlData } = state;
  const navigate = useNavigate();
  const [more, setMore] = useState(0);
  const [play, setPlay] = useState(0);
  const [playicon, setPlayicon] = useState(0);
  const [music, setMusic] = useState(0);
  const [data, setData] = useState([]);
  const [subdata, setSubData] = useState([]);
  const audioRef = useRef();
  const rangeRef = useRef();
  const [nidValue, setNidValue] = useState(nid);
  const [count, setCount] = useState(
    controlData?.findIndex((value) => {
      return value.nid === nidValue;
    })
  );
  // console.log("count: ", count);
  // console.log("controlData: ", controlData);

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
        `http://www.dawahbox.com/mongo/api/leclistingapi.php?lecid=${nidValue}`
      )
      .then((res) => {
        setSubData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nidValue]);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.currentTime = music;
  //     console.log("audiouseeffect: ");
  //   }
  // }, []);

  const handlePlay = () => {
    if (playicon) {
      setPlayicon(!playicon);
      audioRef.current?.pause();
    } else {
      setPlayicon(!playicon);
      audioRef.current?.play();
    }
  };

  const handleRange = (e) => {
    setMusic(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = e.target.value;
    }
  };
  const handleNextAudio = () => {
    console.log("first count: ", count);
    setCount(
      controlData?.findIndex((value) => {
        return value.nid === nidValue;
      })
    );
    console.log("second count: ", count);
    if (count === controlData?.length - 1) {
      setNidValue(controlData[count]?.nid);
      console.log("end of track next");
    } else {
      setNidValue(controlData[count + 1]?.nid);
      console.log("last count: ", count);
    }
  };
  const handlePreviousAudio = () => {
    console.log("first count: ", count);
    setCount(
      controlData?.findIndex((value) => {
        return value.nid === nidValue;
      })
    );
    console.log("second count: ", count);
    if (count === 0) {
      setNidValue(controlData[count]?.nid);
      console.log("end of track prev");
    } else {
      console.log("third count: ", count);
      setNidValue(controlData[count - 1]?.nid);
    }
  };

  const {
    title,
    Title,
    rpname,
    img,
    cats,
    categories,
    description,
    duration,
    post_date,
    audio = "https://media.dawahnigeria.com/dnlectures/Shaykh%20Umar%20Dada%20Paiko%20%28Niger%29/Paiko_Backlog1435/Paiko-Non-Series/Ustaz-Umar-Paiko_Modern-Muslim-The-Confuse-Specie_www.dawahnigeria.com.mp3",
  } = subdata;
  // console.log(controlData);
  return (
    <Container>
      <div className="audiodetail_wrapper">
        <img className="audiodetail_hero" src={audioHero} alt="audiohero" />
        <div className="audiodetail_container">
          <div className="audiodetail_breadcrumb">
            <p
              onClick={() => {
                navigate(nav1?.link ? nav1.link : "/home");
              }}
              className="audiodetail_breadcrumb_first"
            >
              {`${nav1?.title || "Home"}/`}
            </p>
            <p className="audiodetail_breadcrumb_second">
              {Title?.split("-")[0] || title?.split("-")[0] || "Unknown"}
            </p>
          </div>
          <div className="audiodetail_head_wrap">
            <div className="audiodetail_head_left">
              <img className="audiodetail_head_left_img" src={img} alt="head" />
            </div>
            <div className="audiodetail_head_right">
              <h1 className="audiodetail_head_right_head">
                {title || Title || "Unknown"}
              </h1>
              <div className="audiodetail_head_right_text">
                <p className="audiodetail_head_right_text1">
                  {rpname || "unknown"}
                </p>
                <p className="audiodetail_head_right_text2">
                  {cats || "unknown"}
                </p>
              </div>

              <div className="audiodetail_head_right_actions_wrap">
                <div
                  onClick={() => {
                    setPlay(!play);
                  }}
                  className="audiodetail_play"
                >
                  {play ? (
                    <BiPause className="audiodetail_play_icon" />
                  ) : (
                    <BsPlay className="audiodetail_play_icon" />
                  )}

                  <p className="audiodetail_play_text">
                    {play ? "close" : "Play"}
                  </p>
                </div>
                <div className="audiodetail_fav">
                  <MdFavoriteBorder className="audiodetail_fav_icon" />
                  <p className="audiodetail_fav_text">1,400</p>
                </div>
                <div className="audiodetail_share">
                  <BiShareAlt className="audiodetail_share_icon" />
                  <p className="audiodetail_share_text">23</p>
                </div>
                <div className="audiodetail_comment">
                  <BiMessageMinus className="audiodetail_comment_icon" />
                  <p className="audiodetail_comment_text">44</p>
                </div>
                <div className="audiodetail_download">
                  <RiDownload2Fill className="audiodetail_download_icon" />
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------- Audio Detial play ------------------- */}
          {play ? (
            <div className="audiodetail_play_contain">
              <div className="audiodetail_play_wrap">
                <img src={Disk} alt="disk" />
                <div className="audiodetail_play_txt">
                  <marquee className="audiodetail_play_txt1">
                    {title || Title || "unknown"}
                  </marquee>
                  <marquee className="audiodetail_play_txt2">
                    {rpname || "unknown"}
                  </marquee>
                </div>
                <div className="audiodetail_play_control">
                  <TbPlayerSkipBackFilled
                    onClick={handleNextAudio}
                    className="audiodetail_play_back"
                  />
                  <div onClick={handlePlay} className="audiodetail_play_start">
                    {!playicon ? (
                      <FaPlay className="audiodetail_play_start_icon" />
                    ) : (
                      <GiPauseButton className="audiodetail_play_start_icon" />
                    )}
                  </div>
                  <TbPlayerSkipForwardFilled
                    onClick={handleNextAudio}
                    className="audiodetail_play_forward"
                  />
                </div>

                <div className="audiodetail_play_action">
                  <TbRepeat className="audiodetail_play_repeat" />
                  <RiDownload2Fill className="audiodetail_play_download" />
                  <MdFavoriteBorder className="audiodetail_play_fav" />
                  <BiShareAlt className="audiodetail_play_share" />
                  <GoDiffAdded className="audiodetail_play_add" />
                </div>
                <div className="audiodetail_timing">
                  <p className="audiodetail_timing_text">{` ${
                    audioRef.current?.currentTime == 0
                      ? "00:00"
                      : `${Math.floor(audioRef.current?.currentTime / 60)}:${(
                          audioRef.current?.currentTime % 60
                        ).toFixed(0)}`
                  } /${duration}`}</p>
                </div>
                <div className="audiodetail_close">
                  <SlArrowDown className="audiodetail_close_icon" />
                </div>
              </div>
              <input
                ref={rangeRef}
                type="range"
                min={"0"}
                max={audioRef.current?.duration}
                value={music}
                onChange={(e) => {
                  handleRange(e);
                }}
                className="audiodetail_scroll_bar"
              />
              {/* <audio
                ref={audioRef}
                src={audio}
                onTimeUpdate={() => {
                  if (audioRef.current && !audioRef.current?.seeking) {
                    setMusic(audioRef?.current?.currentTime);
                  }
                }}
              /> */}
            </div>
          ) : (
            ""
          )}
          {/* -------------------------- End ------------------- */}
          <div className="audiodetail_info">
            <div className="audiodetail_info_wrap">
              <p className="audiodetail_info_name">Genre: </p>
              <p className="audiodetail_info_value">{cats || "unknown"}</p>
            </div>
            <div className="audiodetail_info_wrap">
              <p className="audiodetail_info_name">Year of Release: </p>
              <p className="audiodetail_info_value">
                {post_date?.split(" ")[1]?.split("/")[0] || "unknow"}
              </p>
            </div>
          </div>
          <div className="audiodetail_summary">
            <h1 className="audiodetail_summary_header">Summary</h1>
            <p
              className={`audiodetail_summary_body ${
                more
                  ? "audiodetail_summary_body_open "
                  : "audiodetail_summary_body_close "
              }`}
            >
              {description || "unknow"}
            </p>
            <div onClick={() => setMore(!more)} className="audiodetail_more">
              <p className="audiodetail_more_text">{more ? "less" : "more"}</p>
              <FiChevronsRight className="audiodetail_more_icon" />
            </div>
          </div>
          <div className="audiodetail_songs">
            <GroupWidget data={data} heading="More Songs" type={"album"} />
          </div>
          <div className="audiodetail_album">
            <GroupWidget
              data={data}
              heading="More from this album"
              type={"album"}
            />
          </div>
          <div className="audiodetail_comments">
            <h1 className="audiodetail_comments_header">Comments</h1>
            <textarea
              className="audiodetail_comment_input"
              placeholder="Pls share your thoughts"
              name=""
              id=""
              cols="30"
              rows="5"
              maxLength="500"
            ></textarea>
            <div className="audiodetail_comment_action">
              <SlEmotsmile className="audiodetail_comment_moji" />
              <button className="audiodetail_comment_button">Comment</button>
            </div>
          </div>
          {/* // ----------------------- audiores --------------------- // */}
          <div className="audiores_wrapper">
            <div className="audiores_image_wrap">
              <img className="audiores_image" src={img} alt="head" />
            </div>
            <div className="audiores_text">
              <p className="audiores_text1">{title || Title || "Unknown"}</p>
              <p className="audiores_text2">{cats || categories || "unknow"}</p>
            </div>
            <div className="audiores_scroll_wrap">
              <p className="audiores_scroll_start">
                {audioRef.current?.currentTime == 0
                  ? "00:00"
                  : `${Math.floor(audioRef.current?.currentTime / 60)}:${(
                      audioRef.current?.currentTime % 60
                    ).toFixed(0)}`}
              </p>
              {/* <div className="audiores_scroll_bar"></div> */}
              <input
                ref={rangeRef}
                type="range"
                min={"0"}
                max={audioRef.current?.duration}
                value={music}
                onChange={(e) => {
                  handleRange(e);
                }}
                className="audiores_scroll_bar"
              />
              <audio
                ref={audioRef}
                src={audio}
                onTimeUpdate={() => {
                  if (audioRef.current && !audioRef.current?.seeking) {
                    setMusic(audioRef?.current?.currentTime);
                  }
                }}
              />

              <p className="audiores_scroll_stop">{duration}</p>
            </div>
            <div className="audiores_play_control_wrap">
              <TbRepeat className="audiores_play_control_repeat" />
              <div className="audiores_play_control">
                <TbPlayerSkipBackFilled
                  onClick={() => {
                    handlePreviousAudio();
                  }}
                  className="audiores_play_back"
                />
                <div onClick={handlePlay} className="audiores_play_start">
                  {!playicon ? (
                    <FaPlay className="audiores_play_start_icon" />
                  ) : (
                    <GiPauseButton className="audiores_play_start_icon" />
                  )}
                </div>
                <TbPlayerSkipForwardFilled
                  onClick={() => {
                    handleNextAudio();
                  }}
                  className="audiores_play_forward"
                />
              </div>
              <RiPlayListFill className="audiores_play_control_list" />
            </div>
            <div className="audiores_actions">
              <RiDownload2Fill className="audiores_download" />
              <MdFavoriteBorder className="audiores_fav" />
              <BiMessageMinus className="audiores_comment" />
              <SlOptionsVertical className="audiores_option" />
            </div>
          </div>
          {/* ----------------------- audiores ends --------------------- */}
        </div>
      </div>
    </Container>
  );
};

export default AudioDetail;
