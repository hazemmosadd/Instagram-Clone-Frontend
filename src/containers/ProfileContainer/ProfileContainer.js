import { React, useEffect, useState } from "react";
import Profile from "../../components/Profile/Profile";
import { fetchProfileDataByUsername , fetchProfileAvatarByUsername , fetchPostsByUsername } from "../../utils/api";
import {useParams} from "react-router-dom"

const ProfileContainer = () => {
  const [profilePosts, setProfilePosts] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [avatarUrl, setAvatarUrl] = useState(null); // New state variable for avatar URL
  const { username } = useParams();

  console.log(username);


  useEffect(() => {
    const fetchProfileData = async () => {
      // Fetch profile data here...
      try {
        const { profileData } = await fetchProfileDataByUsername(username);
        setProfileData(profileData);
      } catch (error) {}
    };
    const fetchAvatar = async () => {
      try {
        const avatarBlob = await fetchProfileAvatarByUsername(username);
        const avatarUrl = URL.createObjectURL(avatarBlob); // Convert Blob to local URL
        setAvatarUrl(avatarUrl)
      } catch (error) {
        console.log(error);
      }
    };
    const fetchProfilePosts = async () => {
      try {
        const {userPosts} = await fetchPostsByUsername(username)
        setProfilePosts(userPosts) 
      } catch (error) {
        console.log(error);

      }
    };

    fetchProfileData();
    fetchProfilePosts();
    fetchAvatar();

  }, []);

  console.log(avatarUrl);
  return <Profile profileData={profileData} profilePosts={profilePosts} avatar = {avatarUrl} />;
};

export default ProfileContainer;
