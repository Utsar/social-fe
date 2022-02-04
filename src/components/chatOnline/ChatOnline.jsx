import "./chatOnline.css";

export default function ChatOnline() {
  return (
    <>
      <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImageContainer">
            <img
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              alt=""
              className="chatOnlineImage"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Presidendi laager</span>
        </div>
        <div className="chatOnlineFriend">
          <div className="chatOnlineImageContainer">
            <img
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              alt=""
              className="chatOnlineImage"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Presidendi laager</span>
        </div>
        <div className="chatOnlineFriend">
          <div className="chatOnlineImageContainer">
            <img
              src="https://randomuser.me/api/portraits/lego/2.jpg"
              alt=""
              className="chatOnlineImage"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Presidendi laager</span>
        </div>
      </div>
    </>
  );
}
