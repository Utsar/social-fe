import React from "react";
import "./sidebarRight.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

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
            {Users.map((user) => (
              <Online key={user.id} users={user} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default sidebarRight;
