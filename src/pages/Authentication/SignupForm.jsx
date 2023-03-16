import React, { useState } from "react";
import "./signupform.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import facebook from "../../assets/png/social/facebook.png";
import twitter from "../../assets/png/social/twitter.png";
import google from "../../assets/png/social/google.png";
import { GrCheckmark } from "react-icons/gr";

const SignupForm = () => {
  const [show, setShow] = useState("password");
  const [show2, setShow2] = useState("password");
  const [confirm, setConfirm] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(0);
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
  const { email, password, name } = data;
  return (
    <div className="signupform_wrapper">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="signupform_form"
      >
        <input
          onChange={(e) => {
            handleInput(e);
          }}
          type="text"
          placeholder="Full Name"
          required
          value={name}
          id="name"
          className="signupform_fullname"
        />
        <input
          onChange={(e) => {
            handleInput(e);
          }}
          type="text"
          placeholder="User Name"
          required
          value={email}
          id="email"
          className="signupform_name"
        />
        <div className="signupform_password_wrap">
          <input
            onChange={(e) => {
              handleInput(e);
            }}
            type={show}
            placeholder="Password"
            required
            value={password}
            id="password"
            className="signupform_password"
          />
          {show === "password" && (
            <div className="signupform_password_icon_show_wrap">
              <AiFillEye
                onClick={() => setShow("text")}
                className="signupform_password_icon_show"
              />
            </div>
          )}
          {show !== "password" && (
            <div className="signupform_password_icon_hide_wrap">
              <AiFillEyeInvisible
                onClick={() => setShow("password")}
                className="signupform_password_icon_hide"
              />
            </div>
          )}
        </div>
        <div className="signupform_confpassword_wrap">
          <input
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
            type={show2}
            placeholder="Confirm Password"
            required
            id="password"
            className="signupform_confpassword"
          />
          {show2 === "password" && (
            <div className="signupform_confpassword_icon_show_wrap">
              <AiFillEye
                onClick={() => setShow2("text")}
                className="signupform_confpassword_icon_show"
              />
            </div>
          )}
          {show2 !== "password" && (
            <div className="signupform_confpassword_icon_hide_wrap">
              <AiFillEyeInvisible
                onClick={() => setShow2("password")}
                className="signupform_confpassword_icon_hide"
              />
            </div>
          )}
        </div>
        <div className="signupform_gender_wrap">
          <div className="signupform_male">
            <div
              onClick={() => setGender("male")}
              className={`signupform_male_button ${
                gender === "male"
                  ? "signupform_male_button_active"
                  : "signupform_male_button_inactive"
              }`}
            >
              {gender === "male" ? (
                <GrCheckmark className="signupform_male_icon" />
              ) : (
                ""
              )}
            </div>
            <p className="signupform_male_text">Male</p>
          </div>
          <div className="signupform_female">
            <div
              onClick={() => setGender("female")}
              className={`signupform_female_button ${
                gender === "female"
                  ? "signupform_female_button_active"
                  : "signupform_female_button_inactive"
              }`}
            >
              {gender === "female" ? (
                <GrCheckmark className="signupform_female_icon" />
              ) : (
                ""
              )}
            </div>
            <p className="signupform_female_text">Female</p>
          </div>
        </div>
        <button className="signupform_button">Sign up</button>
        <div className="signupform_terms">
          <div
            onClick={() => {
              setTerms(!terms);
            }}
            className={`signupform_terms_button ${
              terms
                ? "signupform_terms_button_active"
                : "signupform_terms_button_inactive"
            }`}
          ></div>
          <div className="signupform_terms_text">
            <p className="signupform_terms_text1">
              I have read and accept the{" "}
            </p>
            <p className="signupform_terms_text2">Terms and Condition</p>
          </div>
        </div>
        <span className="signupform_or">- or -</span>
        <div className="signupform_social_wrap">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={google} alt="google" />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
