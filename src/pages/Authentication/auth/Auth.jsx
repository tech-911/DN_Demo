import React from "react";
import "./auth.scss";
import loginHero from "../../../assets/png/loginheroimg.png";
import Logo from "../../../assets/png/dn logo.png";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="auth_wrapper">
      <div className="auth_container">
        <img className="auth_hero_image" src={loginHero} alt="loginhero" />
        <div className="auth_header_logo">
          <img
            onClick={() => {
              navigate("/");
            }}
            src={Logo}
            alt="Logo"
          />
        </div>
        <div className="auth_links">
          <Link to={"/auth/login"}>
            <p
              className={`${
                pathname === "/auth/login"
                  ? "auth_login_link_active"
                  : "auth_login_link"
              }`}
            >
              Log in
            </p>
          </Link>
          <Link to={"/auth/signup"}>
            <p
              className={`${
                pathname === "/auth/signup"
                  ? "auth_signup_link_active"
                  : "auth_signup_link"
              }`}
            >
              Sign up
            </p>
          </Link>
        </div>
        <div className="auth_outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Login;
