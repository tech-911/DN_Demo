import React from "react";
import "./downloadButton.scss";
import { useNavigate } from "react-router-dom";
const DownloadButton = ({ img, text1, text2, link }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate({ link });
      }}
      className="download_wrapper"
    >
      <img src={img} alt="download" />
      <div className="download_right">
        <p className="download_right_text1">{text1}</p>
        <h1 className="download_right_text2">{text2}</h1>
      </div>
    </div>
  );
};

export default DownloadButton;
