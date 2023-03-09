import React, { useEffect, useState } from "react";
import "./iconText.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const IconText = ({ icon, link, name, id, group }) => {
  const location = useLocation();
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (location.pathname.includes("/home")) {
      setActive(0);
    } else if (location.pathname === "/") {
      setActive(0);
    } else if (location.pathname.includes("/genres")) {
      setActive(7);
    } else if (location.pathname.includes("/recommend2")) {
      setActive(12);
    } else if (location.pathname.includes("/lecturers")) {
      setActive(3);
    } else if (location.pathname.includes("/videos")) {
      setActive(4);
    } else if (location.pathname.includes("/playlists")) {
      setActive(5);
    }
  });
  return (
    <Link
      to={link}
      className={`icontext_link ${active === id ? "icontext_active" : ""}`}
    >
      <div
        className={`icontext_icon ${
          active === id ? "icontext_active_icon" : ""
        }`}
      >
        {icon}
      </div>
      <p
        className={`icontext_name ${
          active === id ? "icontext_active_text" : ""
        }`}
      >
        {name}
      </p>
    </Link>
  );
};

export default IconText;
