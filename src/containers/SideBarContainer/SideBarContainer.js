import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { fetchProfileAvatarByUsername } from "../../utils/api"; // Assume you have this function to fetch the profile picture
import { useSelector } from "react-redux";  // Import useSelector

const SideBarContainer = () => {
  const [profileAvatar, setProfileAvatar] = useState(null);
  const username = useSelector((state) => state.user.username);

  const navigate = useNavigate();
  const handleProfileClick = () => {
    console.log('hello');
    console.log(username);
    // i dont know how to navigate to the user logged in profile
    navigate(`/${username}`);
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const avatarBlob = await fetchProfileAvatarByUsername(username);
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
