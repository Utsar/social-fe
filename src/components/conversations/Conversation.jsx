import "./conversation.css";

export default function Conversation() {
  return (
    <>
      <div className="conversation">
        <img
          src="https://randomuser.me/api/portraits/lego/2.jpg"
          alt=""
          className="conversationImage"
        />
        <span className="conversationName">Presidendi Laager</span>
      </div>
      <div className="conversation">
        <img
          src="https://randomuser.me/api/portraits/lego/2.jpg"
          alt=""
          className="conversationImage"
        />
        <span className="conversationName">Presidendi Laager</span>
      </div>
      <div className="conversation">
        <img
          src="https://randomuser.me/api/portraits/lego/2.jpg"
          alt=""
          className="conversationImage"
        />
        <span className="conversationName">Presidendi Laager</span>
      </div>
    </>
  );
}
