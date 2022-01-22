import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("post/timeline/1bca97d1a83d5ea54f73daf");
      console.log(res);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {/* {Posts.map((post) => (
            <Post key={post.id} post={post} />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Feed;
