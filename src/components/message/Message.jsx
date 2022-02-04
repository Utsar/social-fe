import "./message.css";

export default function Message({ own }) {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            src="https://randomuser.me/api/portraits/lego/2.jpg"
            alt=""
            className="messageTopImage"
          />
          <p className="messageTopText">Message goes here</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
      </div>
    </>
  );
}
