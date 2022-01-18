import React from "react";
import "./sidebarRight.css";

const sidebarRight = () => {
  return (
    <>
      <div className="sidebarRight">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="/Assets/gift.png" alt="" className="birthdayImage" />
            <span className="birthdayText">
              <b>Lala</b> and <b>3 other frineds </b>have bday today
            </span>
          </div>
          <img src="/Assets/ad.jpg" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img
                  src="/Assets/profiles/profile4.jpg"
                  alt=""
                  className="rightbarProfileImage"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarFriendName">Lala</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default sidebarRight;
