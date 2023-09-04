import React from "react";
import LoginCard from "./LogInCard";
import phoneImage from "../../assets/images/phone.png";
import "./LogInWrapper.css";

function LogInWrapper(props) {
  return (
    <div className="login__wrapper">
      <img src={phoneImage} alt="phone" className="app__phoneImage" />
      <LoginCard updateLoginStatus={props.updateLoginStatus} />
    </div>
  );
}

export default LogInWrapper;
