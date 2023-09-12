import React from 'react';
import logo from '../../assets/images/instagram-logo.png'
import './LoginForm.css'
const LoginForm = (props) => {
  return (
    <div className="loginCard__container">
      <div className="loginCard__card">
        <img src={logo} alt="Instagram logo" className="loginCard__logo" />
        <div className="loginCard__inputFields">
          {/* Refactored to use reusable input component */}
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={props.username}
            onChange={(e) => props.setUsername(e.target.value)}
            className="loginCard__inputField"
          />
          <input
            type="password"
            placeholder="Password"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
            className="loginCard__inputField"
          />
          <button onClick={props.handleLogin} className="loginCard__loginButton">
            Log in
          </button>
        </div>
      </div>
      <div className="loginCard__signupCard">
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm 