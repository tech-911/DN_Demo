import React from "react";
import "./recommendwidget.scss";
import Rec1_circle from "../../assets/png/recommend_circle.png";
import Rec1_rect from "../../assets/png/recommend_rect.png";
import { BiLike } from "react-icons/bi";
import { HiShare } from "react-icons/hi";
import { TbMessage2 } from "react-icons/tb";
const Recommend_widget = () => {
  return (
    <div className="recwid_wrapper">
      <div className="recwid_left">
        <img className="recwid_left_img" src={Rec1_circle} alt="rect_circle" />
      </div>
      <div className="recwid_right">
        <div className="recwid_right_head_wrap">
          <h1 className="recwid_right_head1">Shaykh Abubakar Giro (Argungu)</h1>
          <p className="recwid_right_head2">Argungu 2022-12-06 16:35</p>
        </div>
        <h1 className="recwid_right_mid">Ramadan Tafseer 1443</h1>
        <div className="recwid_right_action">
          <div className="recwid_like">
            <BiLike className="recwid_like_icon" />
            <p className="recwid_like_text">12.7k</p>
          </div>
          <div className="recwid_share">
            <HiShare className="recwid_share_icon" />
            <p className="recwid_share_text">4k</p>
          </div>
          <div className="recwid_comment">
            <TbMessage2 className="recwid_comment_icon" />
            <p className="recwid_comment_text">3.1k</p>
          </div>
        </div>
        <img className="recwid_right_img" src={Rec1_rect} alt="Rec1_rect" />
      </div>
    </div>
  );
};

export default Recommend_widget;
