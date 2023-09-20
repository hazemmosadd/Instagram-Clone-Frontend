import React, { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from '../../utils/api';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/userSlice'; // Import the login action creator

const LoginContainer = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handleLogin = async () => {
    const payload = { userName: username, password: password };
    try {
      const response = await login(payload);
      if (response.success) {
        props.updateLoginStatus(true); // Update login status
        console.log(loginReducer({username : response.username}));
        dispatch(loginReducer({username : response.username}))
        
      } else {
        console.log("Login failed"); // Inform the user
      }
    } catch (error) {
      console.log("An error occurred"); // Inform the user
    }
  };

  return (
    <LoginForm
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      handleLogin={handleLogin}
    ></LoginForm>
  );
};


export default LoginContainer