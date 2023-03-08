import React from "react";
import "./sidenav.scss";
import Logo from "../../assets/png/dn logo.png";
import { Link } from "react-router-dom";
import avatar from "../../assets/svg/avatar.svg";
import { lectures, library } from "./data";
import IconText from "../iconText/IconText";
import { RiAwardFill } from "react-icons/ri";

const SideNav = ({ res }) => {
  return (
    <div className="sidenav_wrapper">
      <div className="sidenav_logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="sidenav_auth">
        <div className="sidenav_avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <p className="sidenav_auth_text">Log in/ Sign Up</p>
      </div>
      <div className="sidenav_lectures">
        <h1 className="sidenav_lectures_header">Lectures</h1>
        {lectures.map(({ icon, id, link, name }) => {
          return (
            <IconText
              key={id}
              icon={icon}
              id={id}
              link={link}
              name={name}
              group={"lectures"}
            />
          );
        })}
      </div>
      <div className="sidenav_library">
        <h1 className="sidenav_library_header">Library</h1>
        {library.map(({ icon, id, link, name }) => {
          return (
            <IconText
              key={id}
              icon={icon}
              id={id}
              link={link}
              name={name}
              group={"library"}
            />
          );
        })}
      </div>
      <div className="sidenav_Buzz">
        <h1 className="sidenav_Buzz_header">Buzz</h1>
        <IconText
          icon={<RiAwardFill className="icon0 icon" />}
          id={11}
          link={""}
          name={"Recommended"}
          group={"buzz"}
        />
      </div>
      <div className="sidenav_podcast">
        <h1 className="sidenav_podcast_header">Podcast</h1>
        <IconText
          icon={<RiAwardFill className="icon0 icon" />}
          id={12}
          link={"/recommend2"}
          name={"Recommended"}
          group={"podcast"}
        />
      </div>
    </div>
  );
};

export default SideNav;
