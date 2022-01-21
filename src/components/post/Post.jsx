import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt="profile"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert htmlColor="grey" className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img className="postImage" src={post?.photo} alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/Assets/like.png" alt="" className="likeIcon" />
            <img src="/Assets/heart.png" alt="" className="heartIcon" />
            <span className="postLikeCounter">{post.likes}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
