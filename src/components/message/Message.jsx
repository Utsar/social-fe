import "./message.css";

export default function Message({ own }) {
  return (
    <>
      <div className="message own">
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
