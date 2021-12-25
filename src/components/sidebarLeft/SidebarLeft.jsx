import React from "react";
import "./sidebarLeft.css";

import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";

const sidebarLeft = () => {
  return (
    <>
      <div className="sidebarLeft">
        <div className="sidebarLeftWrapper">
          <ul className="sidebarLeftList">
            <li className="sidebarLeftListItem">
              <RssFeed className="sidebarLeftIcon" />
              <span className="sidebarLeftListItemText">Feed</span>
            </li>
            <li className="sidebarLeftListItem">
              <Chat className="sidebarLeftIcon" />
              <span className="sidebarLeftListItemText">Chats</span>
            </li>
            <li className="sidebarLeftListItem">
              <PlayCircleFilledOutlined className="sidebarLeftIcon" />
              <span className="sidebarLeftListItemText">Videos</span>
            </li>
            <li className="sidebarLeftListItem">
              <Group className="sidebarLeftIcon" />
              <span className="sidebarLeftListItemText">Groups</span>
            </li>
            <li className="sidebarLeftListItem">
              <Bookmark className="sidebarLeftIcon" />
              <span className="sidebarLeftListItemText">Bookmarks</span>
            </li>
            <li className="sidebarLeftListItem">
              <HelpOutline className="sidebarLeftIcon" />
              <span className="sidebarLeftListItemText">Questions</span>
            </li>
            <li className="sidebarLeftListItem">
              <WorkOutline className="sidebarLeftIcon" />
              <span className="sidebarLeftListItemText">Jobs</span>
            </li>
            <li className="sidebarLeftListItem">
              <Event className="sidebarLeftIcon" />
              <span className="sidebarLeftListItemText">Events</span>
            </li>
            <li className="sidebarLeftListItem">
              <School className="sidebarLeftIcon" />
              <span className="sidebarLeftListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarLeftButton">Show more</button>
          <hr className="sidebarLeftHr" />
          <ul className="sidebarLeftFriendList">
            <li className="sidebarLeftFriend">
              <img
                className="sidebarLeftFriendImage"
                src="/Assets/profiles/profile1.jpg"
                alt=""
              />
              <span className="sidebarLeftFriendName">Ale</span>
            </li>
            <li className="sidebarLeftFriend">
              <img
                className="sidebarLeftFriendImage"
                src="/Assets/profiles/profile1.jpg"
                alt=""
              />
              <span className="sidebarLeftFriendName">Ale</span>
            </li>
            <li className="sidebarLeftFriend">
              <img
                className="sidebarLeftFriendImage"
                src="/Assets/profiles/profile1.jpg"
                alt=""
              />
              <span className="sidebarLeftFriendName">Ale</span>
            </li>
            <li className="sidebarLeftFriend">
              <img
                className="sidebarLeftFriendImage"
                src="/Assets/profiles/profile1.jpg"
                alt=""
              />
              <span className="sidebarLeftFriendName">Ale</span>
            </li>
            <li className="sidebarLeftFriend">
              <img
                className="sidebarLeftFriendImage"
                src="/Assets/profiles/profile1.jpg"
                alt=""
              />
              <span className="sidebarLeftFriendName">Ale</span>
            </li>
            <li className="sidebarLeftFriend">
              <img
                className="sidebarLeftFriendImage"
                src="/Assets/profiles/profile1.jpg"
                alt=""
              />
              <span className="sidebarLeftFriendName">Ale</span>
            </li>
            <li className="sidebarLeftFriend">
              <img
                className="sidebarLeftFriendImage"
                src="/Assets/profiles/profile1.jpg"
                alt=""
              />
              <span className="sidebarLeftFriendName">Ale</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default sidebarLeft;
