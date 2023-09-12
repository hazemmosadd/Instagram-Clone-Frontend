import React from "react";
import "./Profile.css";
import posts from "../../assets/icons/posts.png";
import saved from "../../assets/icons/saved.png";
import tagged from "../../assets/icons/tagged.png";

import ProfileHeader from "./ProfileHeader";

const Profile = ({ profilePosts, profileData , avatar }) => {
  //const imageUrls = [i1, i2, i3, i4, i5];

  console.log(avatar);
  return (
    <div className="profile-container">
      
      <ProfileHeader profileData={profileData} avatar = {avatar}></ProfileHeader>
      <div className="highlights-section">
        <h2 className="highlights-title">HIGHLIGHTS</h2>
      </div>
      <div className="navbar">
        <div className="nav-item nav-item--first active">
          <img className="nav-icon" src={posts} alt="Posts" />
          <h3 className="nav-label">POSTS</h3>
        </div>
        <div className="nav-item">
          <img className="nav-icon" src={saved} alt="Saved" />
          <h3 className="nav-label">SAVED</h3>
        </div>
        <div className="nav-item nav-item--last ">
          <img
            className="nav-icon nav-icon--tagged"
            src={tagged}
            alt="Tagged"
          />
          <h3 className="nav-label">TAGGED</h3>
        </div>
      </div>
      <div className="posts">
        {profilePosts.map((url, index) => (
          <div className="post-item" key={index}>
            <img className="post-image" src={url} alt={`Post ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
