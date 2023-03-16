import React, { useState } from "react";
import "./loginform.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import facebook from "../../assets/png/social/facebook.png";
import twitter from "../../assets/png/social/twitter.png";
import google from "../../assets/png/social/google.png";

const LoginForm = () => {
  const [show, setShow] = useState("password");
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { email, password } = data;
  return (
    <div className="loginform_wrapper">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="loginform_form"
      >
        <input
          onChange={(e) => {
            handleInput(e);
          }}
          type="text"
          placeholder="User Name"
          required
          value={email}
          id="email"
          className="loginform_name"
        />
        <div className="loginform_password_wrap">
          <input
            onChange={(e) => {
              handleInput(e);
            }}
            type={show}
            placeholder="Password"
            required
            value={password}
            id="password"
            className="loginform_password"
          />
          {show === "password" && (
            <div className="loginform_password_icon_show_wrap">
              <AiFillEye
                onClick={() => setShow("text")}
                className="loginform_password_icon_show"
              />
            </div>
          )}
          {show !== "password" && (
            <div className="loginform_password_icon_hide_wrap">
              <AiFillEyeInvisible
                onClick={() => setShow("password")}
                className="loginform_password_icon_hide"
              />
            </div>
          )}
        </div>
        <div className="loginform_forgot_wrap">
          <p className="loginform_forgot">Forgot password?</p>
        </div>
        <button className="loginform_button">Log in</button>
        <span className="loginform_or">- or -</span>
        <div className="loginform_social_wrap">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={google} alt="google" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
