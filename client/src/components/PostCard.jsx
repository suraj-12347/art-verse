// src/components/Post.jsx
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <img
        src={post.image}
        alt="post"
        className="w-full object-cover"
      />
    </div>
  );
};


export default Post;
