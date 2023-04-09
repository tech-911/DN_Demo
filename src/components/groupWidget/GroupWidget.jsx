import React, { useState, useEffect } from "react";
import "./groupWidget.scss";
import AlbumWidget from "../albumWidget/AlbumWidget";
import { FiChevronsRight } from "react-icons/fi";
import LecturersWidget from "../lecturersWidget/LecturersWidget";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings2, settings3, settings4 } from "./settings";

const GroupWidget = ({ data, heading, type, navLinking, nav1 }) => {
  const [more, setMore] = useState(0);
  const navigate = useNavigate();
  const [size, setSize] = useState(() => {
    return Number(localStorage.getItem("widthsize")) || window.innerWidth;
  });
  const [settingsresponsive, setSettingsresponsive] = useState(() => {
    return size < 513 ? { ...settings4 } : { ...settings3 };
  });

  useEffect(() => {
    localStorage.setItem("widthsize", JSON.stringify(size));
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  useEffect(() => {
    setSettingsresponsive(() => {
      return size < 513 ? { ...settings4 } : { ...settings3 };
    });
  }, [size]);
  console.log(size);
  console.log(settingsresponsive);
  return (
    <div className="groupWidget_wrapper">
      <div className="groupWidget_top">
        <h1 className="groupWidget_top_heading">{heading}</h1>
        <div onClick={() => setMore(!more)} className="groupWidget_more">
          <p className="groupWidget_more_text">more</p>
          <FiChevronsRight className="groupWidget_more_icon" />
        </div>
      </div>
      {type === "album" && (
        <Slider className="groupWidget_items" {...settings2}>
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
                        nav1: nav1,
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
        </Slider>
      )}
      {type === "lecturer" && (
        <Slider
          className="groupWidget_items groupWidget_carousel_lecturers"
          {...settingsresponsive}
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
                  className="groupWidget_lecturer_item"
                  onClick={() => {
                    navigate(`${navLinking}`, {
                      state: {
                        title: title || Title,
                        rpname,
                        img,
                        cats,
                        audio,
                        nav1: nav1,
                      },
                    });
                  }}
                  key={idx + 1}
                >
                  <LecturersWidget key={idx} rp={rpname} img={img} />
                </div>
              );
            }
          )}
        </Slider>
      )}
    </div>
  );
};

export default GroupWidget;

// className={`groupWidget_items ${
//             more ? "groupWidget_open_more" : "groupWidget_close_more"
//           }`}
