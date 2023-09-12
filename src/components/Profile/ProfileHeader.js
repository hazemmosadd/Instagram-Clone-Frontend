import Avavtar from "../UI/Avatar";
import settings from "../../assets/icons/settings.png";
import placeholder from "../../assets/images/placeholder.png"; // Placeholder image

function ProfileHeader({ profileData , avatar }) {
  //console.log(profileData);
  console.log(avatar);
  return (
    <div className="profile-header">
      <Avavtar avatar={avatar || placeholder}></Avavtar>
      <div className="profile-details">
        <div className="header-row">
          <p className="profile-username">
            {profileData.username || "Instagram user"}
          </p>
          <div className="profile-actions">
            <div className="btn-edit">Edit profile</div>
            <div className="btn-view-archive">View Archive</div>
          </div>
          <img className="icon-settings" src={settings} alt="Settings"></img>
        </div>
        <div className="spacer"></div>
        <div className="user-stats">
          <p className="stat-item">
            <span className="stat-value">{profileData.posts || 0}</span>{" "}
            posts
          </p>
          <p className="stat-item">
            <span className="stat-value">
              {profileData.followers || 0}
            </span>{" "}
            followers
          </p>
          <p className="stat-item">
            <span className="stat-value">{profileData.following || 0}</span>{" "}
            following
          </p>
        </div>
        <h2 className="profile-fullname">{profileData.fullname || ""}</h2>
        <h3 className="profile-bio">{profileData.bio || ""}</h3>
      </div>
    </div>
  );
}

export default ProfileHeader;
