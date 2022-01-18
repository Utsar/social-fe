import "./post.css";
import { MoreVert } from "@material-ui/icons";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src="/Assets/profiles/profile3.jpg"
              alt="profile"
            />
            <span className="postUsername">Kristian Utsar</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert htmlColor="grey" className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">First Post</span>
          <img className="postImage" src="/Assets/posts/post1.jpg" alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/Assets/like.png" alt="" className="likeIcon" />
            <img src="/Assets/heart.png" alt="" className="heartIcon" />
            <span className="postLikeCounter">2 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
