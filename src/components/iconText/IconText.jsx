import React, { useEffect, useState } from "react";
import "./iconText.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const IconText = ({ icon, link, name, id, group }) => {
  const location = useLocation();
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (location.pathname.includes("/user/booking")) {
      setActive(0);
    } else if (location.pathname === "/user") {
      setActive(0);
    } else if (location.pathname.includes("/user/transaction")) {
      setActive(1);
    } else if (location.pathname.includes("/user/history")) {
      setActive(2);
    } else if (location.pathname.includes("/user/settings")) {
      setActive(3);
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
