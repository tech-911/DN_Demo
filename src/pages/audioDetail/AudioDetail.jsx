import React, { useEffect, useState } from "react";
import "./audiodetail.scss";
import Container from "../../components/container/Container";
import audioHero from "../../assets/png/detialPagehero.png";
import { useNavigate } from "react-router-dom";
import detailHead from "../../assets/png/detailHeadImage.png";
import { BsPlay } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { BiMessageMinus, BiShareAlt } from "react-icons/bi";
import { RiDownload2Fill, RiPlayListFill } from "react-icons/ri";
import { FiChevronsRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { SlEmotsmile, SlOptionsVertical, SlArrowDown } from "react-icons/sl";
import { GoDiffAdded } from "react-icons/go";
import {
  TbPlayerSkipForwardFilled,
  TbPlayerSkipBackFilled,
  TbRepeat,
  TbMarquee,
} from "react-icons/tb";
import GroupWidget from "../../components/groupWidget/GroupWidget";
import axios from "axios";
import Disk from "../../assets/png/Disk_tranparent.png";
const AudioDetail = () => {
  const navigate = useNavigate();
  const [more, setMore] = useState(0);
  const [play, setPlay] = useState(0);
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

  return (
    <Container>
      <div className="audiodetail_wrapper">
        <img className="audiodetail_hero" src={audioHero} alt="audiohero" />
        <div className="audiodetail_container">
          <div className="audiodetail_breadcrumb">
            <p
              onClick={() => {
                navigate("/");
              }}
              className="audiodetail_breadcrumb_first"
            >
              Home/
            </p>
            <p className="audiodetail_breadcrumb_second">
              Ramadan Tafseer 1443- Suratul Al- Waqiah
            </p>
          </div>
          <div className="audiodetail_head_wrap">
            <div className="audiodetail_head_left">
              <img
                className="audiodetail_head_left_img"
                src={detailHead}
                alt="head"
              />
            </div>
            <div className="audiodetail_head_right">
              <h1 className="audiodetail_head_right_head">
                Ramadan Tafseer 1443- Suratul Al- Waqiah
              </h1>
              <div className="audiodetail_head_right_text">
                <p className="audiodetail_head_right_text1">
                  Ustadh Muslih Ibrahim (Hausa)
                </p>
                <p className="audiodetail_head_right_text2">
                  Ramadan Tafseer 1443
                </p>
              </div>

              <div className="audiodetail_head_right_actions_wrap">
                <div
                  onClick={() => {
                    setPlay(!play);
                  }}
                  className="audiodetail_play"
                >
                  <BsPlay className="audiodetail_play_icon" />
                  <p className="audiodetail_play_text">Play</p>
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
            <div className="audiodetail_play_wrap">
              <img src={Disk} alt="disk" />
              <div className="audiodetail_play_txt">
                <marquee className="audiodetail_play_txt1">
                  Ramadan Tafseer 1443- Suratul Al- Waqiah
                </marquee>
                <marquee className="audiodetail_play_txt2">
                  Ustadh Muslih Ibrahim (Hausa)
                </marquee>
              </div>
              <div className="audiodetail_play_control">
                <TbPlayerSkipBackFilled className="audiodetail_play_back" />
                <div className="audiodetail_play_start">
                  <FaPlay className="audiodetail_play_start_icon" />
                </div>
                <TbPlayerSkipForwardFilled className="audiodetail_play_forward" />
              </div>

              <div className="audiodetail_play_action">
                <TbRepeat className="audiodetail_play_repeat" />
                <RiDownload2Fill className="audiodetail_play_download" />
                <MdFavoriteBorder className="audiodetail_play_fav" />
                <BiShareAlt className="audiodetail_play_share" />
                <GoDiffAdded className="audiodetail_play_add" />
              </div>
              <div className="audiodetail_timing">
                <p className="audiodetail_timing_text">00:00 /04:22</p>
              </div>
              <div className="audiodetail_close">
                <SlArrowDown className="audiodetail_close_icon" />
              </div>
            </div>
          ) : (
            ""
          )}
          {/* -------------------------- End ------------------- */}
          <div className="audiodetail_info">
            <div className="audiodetail_info_wrap">
              <p className="audiodetail_info_name">Genre: </p>
              <p className="audiodetail_info_value">Tafsir</p>
            </div>
            <div className="audiodetail_info_wrap">
              <p className="audiodetail_info_name">Year of Release: </p>
              <p className="audiodetail_info_value">2022</p>
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
              Iman is not a static phenomenal. it either increases or decreases
              based on Muslims’ firmness and consistency on the Deen. When
              Muslims do self evaluation of themselves, they will have the
              chance of detecting their laxities and strengths. This leaves the
              room for the amendment of laxities and consolidation of strengths
              opened, thus, leading to a healthy spiritual life.{" "}
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
              rows="10"
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
              <img className="audiores_image" src={detailHead} alt="head" />
            </div>
            <div className="audiores_text">
              <p className="audiores_text1">Ustadh Muslih Ibrahim (Hausa)</p>
              <p className="audiores_text2">Ramadan Tafseer 1443</p>
            </div>
            <div className="audiores_scroll_wrap">
              <p className="audiores_scroll_start">00:00</p>
              <div className="audiores_scroll_bar"></div>
              <p className="audiores_scroll_stop">30:45</p>
            </div>
            <div className="audiores_play_control_wrap">
              <TbRepeat className="audiores_play_control_repeat" />
              <div className="audiores_play_control">
                <TbPlayerSkipBackFilled className="audiores_play_back" />
                <div className="audiores_play_start">
                  <FaPlay className="audiores_play_start_icon" />
                </div>
                <TbPlayerSkipForwardFilled className="audiores_play_forward" />
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
