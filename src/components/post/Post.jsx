import "./post.css";
import { MoreVert } from "@material-ui/icons";

import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={user.profilePicture || PF + "profiles/noAvatar.png"}
              alt="profile"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAT)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert htmlColor="grey" className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img className="postImage" src={PF + post.image} alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}like.png`}
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <img
              src={`${PF}heart.png`}
              alt=""
              className="heartIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{likes}</span>
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
