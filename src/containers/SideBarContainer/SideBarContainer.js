import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { getMyAvatar } from "../../utils/api"; // Assume you have this function to fetch the profile picture

const SideBarContainer = () => {
  const [profileAvatar, setProfileAvatar] = useState(null);
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/profile");
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const avatarBlob = await getMyAvatar();
        const avatarUrl = URL.createObjectURL(avatarBlob); // Convert Blob to local URL
        setProfileAvatar(avatarUrl);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAvatar();
  }, []);

  return (
    <SideBar
      profilePicture={profileAvatar}
      onProfileClick={handleProfileClick}
      onHomeClick={handleHomeClick}
    ></SideBar>
  );
};

export default SideBarContainer;
