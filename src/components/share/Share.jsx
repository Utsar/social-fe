import "./share.css";
import { PermMedia } from "@material-ui/icons";

const Share = () => {
  return (
    <div className="share">
      hello i'm share
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImage"
            src="/public/Assets/profiles/profile2.jpg"
            alt="profile"
          />
          <input placeholder="Whats's in your mind?" className="shareinput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
