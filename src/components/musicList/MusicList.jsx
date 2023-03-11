import React from "react";
import "./musicList.scss";
import Music from "../../assets/png/musicList.png";
import { FiHeadphones } from "react-icons/fi";
import {
  BsHeartFill,
  BsShareFill,
  BsFillChatSquareTextFill,
} from "react-icons/bs";
import { RiAddBoxLine, RiDownload2Fill } from "react-icons/ri";

const MusicList = ({ lecturer, id, title }) => {
  return (
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
  );
};

export default MusicList;
