import React from "react";
import LoginContainer from "../../containers/LoginContainer/LoginContainer";
import phoneImage from "../../assets/images/phone.png";
import './LoginScreen.css'

const LoginScreen = (props) => {
  return <div className="login__wrapper">
     <img src={phoneImage} alt="phone" className="app__phoneImage" />
      <LoginContainer updateLoginStatus={props.updateLoginStatus} />
  </div>;
};

export default LoginScreen