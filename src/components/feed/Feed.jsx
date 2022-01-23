import React from "react";
import { useState, useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/61bc8fde2893e4b5c59a2e1f");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <Share />
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
