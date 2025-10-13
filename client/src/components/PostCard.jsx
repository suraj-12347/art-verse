// src/components/Post.jsx
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
   
  <Link to={`/post/${post.id}`} className="post-card">
   <div className="w-full rounded-lg overflow-hidden shadow-md">
      <img
        src={post.image}
        alt="post"
        className="w-full object-cover"
      />
    </div>
  </Link>
  );
};


export default Post;
