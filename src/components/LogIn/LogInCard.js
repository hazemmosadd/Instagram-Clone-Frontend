import React, { useState } from "react";
import logo from "../../assets/images/instagram-logo.png";
import "./LogInCard.css"; // Changed to PascalCase to match component name
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { login } from "../../utils/api";

const LoginCard = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const payload = { userName: username, password: password };
    try {
      const response = await login(payload);
      if (response.success) {
        props.updateLoginStatus(true); // Update login status
      } else {
        console.log("Login failed"); // Inform the user
      }
    } catch (error) {
      console.log("An error occurred"); // Inform the user
    }
  };

  return (
    <div className="loginCard__container">
      <div className="loginCard__card">
        <img src={logo} alt="Instagram logo" className="loginCard__logo" />
        <div className="loginCard__inputFields">
          {/* Refactored to use reusable input component */}
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="loginCard__inputField"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="loginCard__inputField"
          />
          <button onClick={handleLogin} className="loginCard__loginButton">
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

export default LoginCard;
