import React from "react";
import "./MainScreen.css";
import { Outlet } from "react-router-dom";  // Import Outlet from react-router
import SideBarContainer from "../../containers/SideBarContainer/SideBarContainer";

const MainScreen = () => {
  return (
    <div className="app__main black-bg">
      <SideBarContainer></SideBarContainer>
      <div className="right-side">
        <Outlet /> 
      </div>
    </div>
  );
};

export default MainScreen;
