import React from "react";
import "./messenger.css";
import Topbar from "../../components/topbar/Topbar.jsx";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";

const Messenger = () => {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for Friends"
              className="chatMenuInput"
            />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="xhatBoxTop">
              <Message />
            </div>
            <div className="xhatBoxBottom"></div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">Online</div>
        </div>
      </div>
    </>
  );
};
export default Messenger;
