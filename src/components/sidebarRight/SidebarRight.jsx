import React from "react";
import "./sidebarRight.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const sidebarRight = ({ user }) => {
  const HomeSidebarRight = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/Assets/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText">
            <b>Lala</b> and <b>3 other frineds </b>have bday today
          </span>
        </div>
        <img src="/Assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} users={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileSidebarRight = () => {
    return (
      <>
        <h4 className="rightbarTitle">User info</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
          <h4 className="rightbarTitle">Friends</h4>
          <div className="rightbarFollowers">
            <div className="rightbarFollower">
              <img
                src="/Assets/profiles/profile4.jpg"
                alt=""
                className="rightbarFollowerImage"
              />
              <span className="rightbarFollowerName">Cider</span>
            </div>
            <div className="rightbarFollower">
              <img
                src="/Assets/profiles/profile3.jpg"
                alt=""
                className="rightbarFollowerImage"
              />
              <span className="rightbarFollowerName">Cider</span>
            </div>
            <div className="rightbarFollower">
              <img
                src="/Assets/profiles/profile2.jpg"
                alt=""
                className="rightbarFollowerImage"
              />
              <span className="rightbarFollowerName">Cider</span>
            </div>
            <div className="rightbarFollower">
              <img
                src="/Assets/profiles/profile1.jpg"
                alt=""
                className="rightbarFollowerImage"
              />
              <span className="rightbarFollowerName">Cider</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="sidebarRight">
        <div className="rightbarWrapper">
          {user ? <ProfileSidebarRight /> : <HomeSidebarRight />}
        </div>
      </div>
    </>
  );
};

export default sidebarRight;
