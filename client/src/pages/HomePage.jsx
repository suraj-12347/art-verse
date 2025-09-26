// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import {posts}  from '../assets/data'
import Post from "../components/PostCard";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    // Fake API delay
    setTimeout(() => {
      setAllPosts(posts);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="max-w-6xl ml-1 mr-1 p-4">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[var(--primary)]"></div>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-4 lg:columns-5 gap-3">
          {allPosts.map((post) => (
            <div key={post.id} className="mb-3 break-inside-avoid">
              <Post post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
  
};

export default Home;
