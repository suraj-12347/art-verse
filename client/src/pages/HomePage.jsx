// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../redux/slices/postSlice";
import { posts as staticPosts } from "../assets/data"; // Static data for now
import Post from "../components/PostCard";
import "./home.css";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();

  // ✅ Redux se posts aur loading state lena
  const { data: allPosts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    // Fake API delay simulate
    setTimeout(() => {
      dispatch(setPosts(staticPosts)); // ✅ Redux me data set karo
    }, 2000);
  }, [dispatch]);

  return (
    <div className="home w-full pl-40 pt-20 pr-0">
      <div className="max-w-6xl ml-1 mr-1 p-4">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader/>
          </div>
        ) : (
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3">
            {allPosts.map((post) => (
              <div key={post.id} className="mb-3 break-inside-avoid">
                <Post post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
