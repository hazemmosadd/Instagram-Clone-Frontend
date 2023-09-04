import { Routes, Route, Navigate } from "react-router-dom";
import LogInWrapper from "../components/LogIn/logInWrapper";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import React, { useEffect, useState } from "react";
import { checkLoginStatus } from "../utils/api";
const AppRoutes = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    console.log(isLoggedIn);
    const fetchLoginStatus = async () => {
      const response = await checkLoginStatus();
      if (response && response.isLoggedIn) {
        setIsLoggedIn(true);
      }
      setLoading(false);
    };
    fetchLoginStatus();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/"  element={isLoggedIn ? (<NewsFeed />) : (<LogInWrapper updateLoginStatus={setIsLoggedIn} />)}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
