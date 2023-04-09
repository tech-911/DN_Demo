import React, { useEffect, useState } from "react";
import "./lecturer_detail.scss";
import Container from "../../components/container/Container";
import audioHero from "../../assets/png/detialPagehero.png";
import { useNavigate, useLocation } from "react-router-dom";
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
import Lecturer_songs from "../lecturer_subs/lecturer_songs/Lecturer_songs";
import Lecturer_album from "../lecturer_subs/lecturer_albums/Lecturer_album";
import Lecturer_playlist from "../lecturer_subs/lecturer_playlist/Lecturer_playlist";
import Lecturer_videos from "../lecturer_subs/lecturer_videos/Lecturer_videos";
import Simillarrp from "../lecturer_subs/simillarrp/Simillarrp";
const LecturerDetail = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const { state } = useLocation();
  const { title, rpname, cats, nid, nav1 } = state;
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [img, setImg] = useState(
    "https://dawahnigeria.com/dawahcast/sites/default/files/600-800/700.jpg"
  );
  // console.log(state);

  // useEffect(() => {
  //   axios
  //     .get("https://dawahnigeria.com/dawahcast/dboxapi/rpjson")
  //     .then((res) => {
  //       setImg(
  //         res.data.rp.filter((value) => {
  //           return value.name === rpname;
  //         })[0].img
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log("lecimg: ", img);

  return (
    <Container>
      <div className="lecdet_wrapper">
        <img className="lecdet_hero" src={audioHero} alt="audiohero" />
        <div className="lecdet_container">
          {/* ------------------------------------ Bread Crumbs -------------------------------------- */}

          <div className="lecdet_breadcrumb">
            <p
              onClick={() => {
                navigate(nav1?.link ? nav1.link : "/home");
              }}
              className="lecdet_breadcrumb_first"
            >
              {`${nav1?.title || "Home"}/`}
            </p>
            <p className="lecdet_breadcrumb_second">
              {title.split("-")[2] || title}
            </p>
          </div>

          {/* ------------------------------------ Section 1 -------------------------------------- */}
          <div className="lecdet_head_wrap">
            <div className="lecdet_head_left">
              <img className="lecdet_head_left_img" src={img} alt="head" />
            </div>
            <div className="lecdet_head_right">
              <h1 className="lecdet_head_right_head">
                {title.split("-")[2] || title}
              </h1>
              <div className="lecdet_head_right_text">
                <p className="lecdet_head_right_text1">{title.split(" ")[2]}</p>
                <p className="lecdet_head_right_text2">{cats}</p>
              </div>

              <div className="lecdet_head_right_actions_wrap">
                <div className="lecdet_fav">
                  <MdFavoriteBorder className="lecdet_fav_icon" />
                  <p className="lecdet_fav_text">1,400</p>
                </div>
                <div className="lecdet_share">
                  <BiShareAlt className="lecdet_share_icon" />
                  <p className="lecdet_share_text">23</p>
                </div>
                <div className="lecdet_comment">
                  <BiMessageMinus className="lecdet_comment_icon" />
                  <p className="lecdet_comment_text">44</p>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------ Section 1 ends -------------------------------------- */}
          {/* ------------------------------------ Section 2 -------------------------------------- */}

          <div className="lecdet_tab_wrap">
            <div className="lecdet_tab">
              <div
                onClick={() => {
                  setTab(1);
                }}
                className="lecdet_tab_song"
              >
                <p
                  className={`${
                    tab === 1 ? "lecdet_tab_song1_active" : "lecdet_tab_song1"
                  }`}
                >
                  Songs
                </p>
                <p
                  className={`${
                    tab === 1 ? "lecdet_tab_song2_active" : "lecdet_tab_song2"
                  }`}
                >{`(${count1})`}</p>
              </div>
              <div
                onClick={() => {
                  setTab(2);
                }}
                className="lecdet_tab_album"
              >
                <p
                  className={`${
                    tab === 2 ? "lecdet_tab_album1_active" : "lecdet_tab_album1"
                  }`}
                >
                  Album
                </p>
                <p
                  className={`${
                    tab === 2 ? "lecdet_tab_album2_active" : "lecdet_tab_album2"
                  }`}
                >{`(${count2})`}</p>
              </div>
              <div
                onClick={() => {
                  setTab(3);
                }}
                className="lecdet_tab_playlist"
              >
                <p
                  className={`${
                    tab === 3
                      ? "lecdet_tab_playlist1_active"
                      : "lecdet_tab_playlist1"
                  }`}
                >
                  Playlist
                </p>
                <p
                  className={`${
                    tab === 3
                      ? "lecdet_tab_playlist2_active"
                      : "lecdet_tab_playlist2"
                  }`}
                >{`(${count3})`}</p>
              </div>
              <div
                onClick={() => {
                  setTab(4);
                }}
                className="lecdet_tab_video"
              >
                <p
                  className={`${
                    tab === 4 ? "lecdet_tab_video1_active" : "lecdet_tab_video1"
                  }`}
                >
                  Videos and more
                </p>
              </div>
              <div
                onClick={() => {
                  setTab(5);
                }}
                className="lecdet_tab_simrp"
              >
                <p
                  className={`${
                    tab === 5 ? "lecdet_tab_simrp1_active" : "lecdet_tab_simrp1"
                  }`}
                >
                  Similar RP
                </p>
              </div>
            </div>
          </div>
          {/* ------------------------------------ Section 2 ends -------------------------------------- */}
          {/* ------------------------------------ Section 3 -------------------------------------- */}
          {tab === 1 && (
            <Lecturer_songs
              rpname={rpname}
              id={nid}
              setCount1={setCount1}
              count1={count1}
              setImg={setImg}
            />
          )}
          {tab === 2 && (
            <Lecturer_album
              rpname={rpname}
              id={nid}
              setCount2={setCount2}
              count2={count2}
              setImg={setImg}
            />
          )}
          {tab === 3 && (
            <Lecturer_playlist
              rpname={rpname}
              id={nid}
              setCount3={setCount3}
              count3={count3}
              setImg={setImg}
            />
          )}
          {tab === 4 && <Lecturer_videos />}
          {tab === 5 && <Simillarrp />}

          {/* ------------------------------------ Section 3 ends -------------------------------------- */}
        </div>
      </div>
    </Container>
  );
};

export default LecturerDetail;
