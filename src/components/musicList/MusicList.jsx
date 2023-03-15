import React, { useState } from "react";
import "./musicList.scss";
import Music from "../../assets/png/musicList.png";
import { FiHeadphones } from "react-icons/fi";
import {
  BsHeartFill,
  BsShareFill,
  BsFillChatSquareTextFill,
  BsArrowDown,
} from "react-icons/bs";
import { RiAddBoxLine, RiDownload2Fill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

const MusicList = ({ lecturer, id, title, img, drop, setDrop }) => {
  
  return (
    <div className="musicList_wrapper_main">
      <div className="musicList_wrapper">
        <div className="musicList_main">
          <p className="musicList_main_left">{id + 1}</p>
          <div className="musicList_main_right">
            <img src={Music} alt="music" />
            <div className="musicList_main_right_content2">
              <marquee
                direction="left"
                loop="5"
                className="musicList_main_right_content2_header"
              >
                {title}
              </marquee>

              <div className="musicList_main_right_content2_body">
                <div className="musicList_main_right_content2_body1">
                  <FiHeadphones className="musicList_headicon" />
                  <p className="musicList_headtext">12k</p>
                </div>
                <div className="musicList_main_right_content2_body2">
                  <BsHeartFill className="musicList_hearticon" />
                  <p className="musicList_hearttext">1.6k</p>
                </div>
                <div className="musicList_main_right_content2_body3">
                  <BsShareFill className="musicList_shareicon" />
                  <p className="musicList_sharetext">4k</p>
                </div>
                <div className="musicList_main_right_content2_body4">
                  <BsFillChatSquareTextFill className="musicList_chaticon" />
                  <p className="musicList_chattext">3.1k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="musicList_lecturer">
          {`${lecturer.split(" ")[0]} ${lecturer.split(" ")[1]}`}
        </p>
        <div className="musicList_action">
          <RiDownload2Fill className="musicList_main_action_icon1" />
          <BsShareFill className="musicList_main_action_icon1" />
          <RiAddBoxLine className="musicList_main_action_icon1" />
        </div>
        <p className="musicList_time">30:28</p>
      </div>
      {/* -----------------MusicListResponsive--------------------- */}
      <div className="musicListres_wrapper">
        <div
          className={` ${
            drop === id ? "musicListres_drop" : "musicListres_drop_close"
          }`}
        >
          <div className="musicListres_drop1">
            <BsShareFill className="icon" />
            <p className="text">Share</p>
          </div>
          <div className="musicListres_drop2">
            <RiAddBoxLine className="icon" />
            <p className="text">Add to Playlist</p>
          </div>
        </div>
        <div className="musicListres_wrapper_left">
          <div className="musicListres_container">
            <img
              src={img}
              alt="background"
              className="musicListres_background_image"
            />
            <div className="musicListres_overlay"></div>
            <div className="musicListres_listen_wrapper">
              <FiHeadphones className="musicListres_listen_icon" />
              <p className="musicListres_listen_text">1.3k</p>
            </div>
          </div>
          <div className="musicListres_main_right_content2">
            <marquee
              direction="left"
              className="musicListres_main_right_content2_header"
            >
              {title}
            </marquee>
            <span className="musicListres_main_right_content2_mid">
              {lecturer}
            </span>
            <div className="musicListres_main_right_content2_body">
              <div className="musicListres_main_right_content2_body2">
                <BsHeartFill className="musicListres_hearticon" />
                <p className="musicListres_hearttext">1.6k</p>
              </div>
              <div className="musicListres_main_right_content2_body3">
                <BsShareFill className="musicListres_shareicon" />
                <p className="musicListres_sharetext">4k</p>
              </div>
              <div className="musicListres_main_right_content2_body4">
                <BsFillChatSquareTextFill className="musicListres_chaticon" />
                <p className="musicListres_chattext">3.1k</p>
              </div>
            </div>
          </div>
        </div>
        <div className="musicListres_wrapper_right">
          <div className="musicListres_wrapper_right_download">
            <BsArrowDown className="musicListres_wrapper_right_download_icon" />
          </div>
          <SlOptionsVertical
            onClick={() => {
              drop === id ? setDrop("") : setDrop(id);
            }}
            className="musicListres_wrapper_right_menue"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicList;
