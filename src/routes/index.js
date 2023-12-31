import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import React, { useEffect, useState } from "react";
import { checkLoginStatus } from "../utils/api";
import MainScreen from "../pages/MainScreen/MainScreen";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer";
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/userSlice'; // Import the login action creator

const AppRoutes = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchLoginStatus = async () => {
      const response = await checkLoginStatus();
      if (response && response.isLoggedIn) {
        
        dispatch(loginUser({username : response.username}))
        setIsLoggedIn(true);
      }
      setLoading(false);
    };
    fetchLoginStatus();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route  path="/"   element={isLoggedIn ? (  <MainScreen></MainScreen>) : (  <LoginScreen updateLoginStatus={setIsLoggedIn} />)}>
          <Route index element={<NewsFeed></NewsFeed>} />
          <Route  path="/:username"  element={<ProfileContainer></ProfileContainer>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
