import React, { useState } from "react";
import "./groupWidget.scss";
import AlbumWidget from "../albumWidget/AlbumWidget";
import { FiChevronsRight } from "react-icons/fi";

const GroupWidget = ({ data, heading }) => {
  const [more, setMore] = useState(0);
  return (
    <div className="groupWidget_wrapper">
      <div className="groupWidget_top">
        <h1 className="groupWidget_top_heading">{heading}</h1>
        <div onClick={() => setMore(!more)} className="groupWidget_more">
          <p className="groupWidget_more_text">more</p>
          <FiChevronsRight className="groupWidget_more_icon" />
        </div>
      </div>
      <div
        className={`groupWidget_items ${
          more ? "groupWidget_open_more" : "groupWidget_close_more"
        }`}
      >
        {data.map(({ img, categories }, idx) => {
          return <AlbumWidget key={idx} categories={categories} img={img} />;
        })}
      </div>
    </div>
  );
};

export default GroupWidget;
