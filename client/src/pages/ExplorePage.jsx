// src/pages/ExplorePage.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../redux/slices/postSlice";

import { posts as staticPosts } from "../assets/data";
import Post from "../components/PostCard";
import './explore.css'
import Input from "../components/Input";
import { FaSearch } from "react-icons/fa";
import Loader from "../components/Loader";
const ExplorePage = () => {
  const dispatch = useDispatch();

  // Redux se posts aur loading state lena
  const postState = useSelector((state) => state.posts);
  const allPosts = postState?.data || [];
  const loading = postState?.loading || false;
  

  // Agar posts empty hai to set karo (same as Home)
  useEffect(() => {
    if (!allPosts.length) {
      dispatch(setPosts(staticPosts));
    }
  }, [allPosts.length, dispatch]);

  // Search query ko Redux ya URL params se le sakte ho
  // For now, browser prompt ya temporary local state use karo
  const search = useSelector((state) => state.search.query) || "";

  // Filter posts based on search query
  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())||
  post.description.toLowerCase().includes(search.toLowerCase())||
  post.mood.toLowerCase().includes(search.toLowerCase())
  );
  console.log("filtered",filteredPosts)

  return (
    <div className="explore w-full pl-40 pt-20 pr-0">
      <div className="input w-full bg-white py-2 px-5 md:hidden lg:hidden xl:hidden 2xl:hidden @max-3xl:hidden">
      <div className="flex items-center bg-[var(--bg)] px-4 py-2  rounded-full w-full max-w-[100%] h-12">
        <FaSearch className="text-[var(--primary)] mr-2" />
        <Input />
      </div>
      </div>
      <div className="max-w-6xl ml-1 mr-1 p-4">
        {loading ? (
          <div className="flex justify-center mt-10 items-center h-40">
          <Loader/>
        </div>
        ) : filteredPosts.length ? (
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3">
            {filteredPosts.map((post) => (
              <div key={post.id} className="mb-3 break-inside-avoid">
                <Post post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No results found 😕</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
