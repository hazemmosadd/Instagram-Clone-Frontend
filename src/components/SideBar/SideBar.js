import React from "react";
import "./SideBar.css";
import logo from "../../assets/images/instagram-logo-white.png";
import home from "../../assets/icons/home.png";
import search from "../../assets/icons/search.png";
import explore from "../../assets/icons/explore.png";
import reels from "../../assets/icons/reels.png";
import messages from "../../assets/icons/messages.png";
import notifications from "../../assets/icons/notifications.png";
import create from "../../assets/icons/create.png";
import placeholder from "../../assets/images/placeholder.png"; // Placeholder image

import SideBarElement from "../SideBarElement/SideBarElement";
const SideBar = ({ profilePicture , onProfileClick , onHomeClick }) => {
  return (
    <div className="sidebar__left">
      <div className="logo__container">
        <img className="instagram__logo" src={logo}></img>
      </div>
      <SideBarElement imageSrc={home} label={"Home"} onClick={onHomeClick}></SideBarElement>
      <SideBarElement imageSrc={search} label={"Search"}></SideBarElement>
      <SideBarElement imageSrc={explore} label={"Explore"}></SideBarElement>
      <SideBarElement imageSrc={reels} label={"Reels"}></SideBarElement>
      <SideBarElement imageSrc={messages} label={"Messages"}></SideBarElement>
      <SideBarElement
        imageSrc={notifications}
        label={"Notifications"}
      ></SideBarElement>
      <SideBarElement imageSrc={create} label={"Create"}></SideBarElement>
      <SideBarElement
        imageSrc={profilePicture || placeholder}
        label={"Profile"}
        extraClass={"circle"}
        onClick = {onProfileClick}
      ></SideBarElement>
    </div>
  );
};
export default SideBar;
