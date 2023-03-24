import React, { useState } from "react";
import "./groupWidget.scss";
import AlbumWidget from "../albumWidget/AlbumWidget";
import { FiChevronsRight } from "react-icons/fi";
import LecturersWidget from "../lecturersWidget/LecturersWidget";
import { useNavigate } from "react-router-dom";

const GroupWidget = ({ data, heading, type, navLinking }) => {
  const [more, setMore] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="groupWidget_wrapper">
      <div className="groupWidget_top">
        <h1 className="groupWidget_top_heading">{heading}</h1>
        <div onClick={() => setMore(!more)} className="groupWidget_more">
          <p className="groupWidget_more_text">{more ? "less" : "more"}</p>
          <FiChevronsRight className="groupWidget_more_icon" />
        </div>
      </div>
      {type === "album" && (
        <div
          className={`groupWidget_items ${
            more ? "groupWidget_open_more" : "groupWidget_close_more"
          }`}
        >
          {data.map(
            (
              {
                img,
                lec_img,
                categories,
                cats,
                title,
                Title,
                rpname,
                nid,
                audio,
              },
              idx
            ) => {
              return (
                <div
                  className="groupWidget_album_item"
                  onClick={() => {
                    navigate(`${navLinking}`, {
                      state: {
                        title: Title || title,
                        rpname,
                        img,
                        cats,
                        nid,
                        audio,
                      },
                    });
                  }}
                  key={idx + 1}
                >
                  <AlbumWidget
                    key={idx}
                    categories={categories || cats}
                    img={img || lec_img}
                  />
                </div>
              );
            }
          )}
        </div>
      )}
      {type === "lecturer" && (
        <div
          className={`groupWidget_items ${
            more ? "groupWidget_open_more" : "groupWidget_albumclose_more"
          }`}
        >
          {data.map(
            (
              { img, categories, cats, title, Title, rpname, nid, audio },
              idx
            ) => {
              return (
                <div
                  className="groupWidget_lecturer_item"
                  onClick={() => {
                    navigate(`${navLinking}`, {
                      state: { title: title||Title, rpname, img, cats, nid, audio },
                    });
                  }}
                  key={idx + 1}
                >
                  <LecturersWidget
                    key={idx}
                    rp={categories || cats}
                    img={img}
                  />
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default GroupWidget;
