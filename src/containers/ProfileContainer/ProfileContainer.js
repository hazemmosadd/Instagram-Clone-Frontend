import { React, useEffect, useState } from "react";
import Profile from "../../components/Profile/Profile";
import { fetchMyProfileData , getMyAvatar } from "../../utils/api";

const ProfileContainer = () => {
  const [profilePosts, setProfilePosts] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [avatarUrl, setAvatarUrl] = useState(null); // New state variable for avatar URL


  useEffect(() => {
    const fetchProfileData = async () => {
      // Fetch profile data here...
      try {
        const { profileData } = await fetchMyProfileData();
        setProfileData(profileData);
      } catch (error) {}
    };
    const fetchAvatar = async () => {
      try {
        const avatarBlob = await getMyAvatar();
        const avatarUrl = URL.createObjectURL(avatarBlob); // Convert Blob to local URL
        setAvatarUrl(avatarUrl)
      } catch (error) {
        console.log(error);
      }
    };
    const fetchProfilePosts = async () => {
      // Fetch profile posts here...
    };

    fetchProfileData();
    fetchProfilePosts();
    fetchAvatar();

  }, []);

  console.log(avatarUrl);
  return <Profile profileData={profileData} profilePosts={profilePosts} avatar = {avatarUrl} />;
};

export default ProfileContainer;
