import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "./headerRouter.scss";
import { useNavigate } from "react-router-dom";

const HeaderRouter = ({ link, title }) => {
  const navigate = useNavigate();
  return (
    <div className="hroute_title_res_wrap">
      <MdOutlineKeyboardArrowLeft
        onClick={() => {
          navigate(link || -1);
        }}
        className="hroute_title_res_icon"
      />
      <p className="hroute_title_res_text">{title || "Unknown"}</p>
    </div>
  );
};

export default HeaderRouter;
