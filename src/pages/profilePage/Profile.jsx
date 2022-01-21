import "./profile.css";
import Feed from "../../components/feed/Feed.jsx";
import SidebarLeft from "../../components/sidebarLeft/SidebarLeft.jsx";
import SidebarRight from "../../components/sidebarRight/SidebarRight.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <SidebarLeft />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/Assets/posts/post3.jpg"
                alt=""
                className="profileCoverImage"
              />
              <img
                src="/Assets/profiles/profile5.jpg"
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kristian</h4>
              <span className="profileInfoDescription">i like beer</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <SidebarRight profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
