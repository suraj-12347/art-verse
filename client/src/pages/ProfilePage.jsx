import React,{useEffect} from "react";
import logo from "../assets/artverse.png";
import profilePic from "../assets/mypic.jpg";
import { FaCog } from "react-icons/fa";
import Button from '../components/Button'
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../redux/slices/postSlice";
import { posts as staticPosts } from "../assets/data"; // Static data for now
import Post from "../components/PostCard";

import Loader from "../components/Loader";




const ProfilePage = () => {
  const dispatch = useDispatch();

  // ✅ Redux se posts aur loading state lena
  const { data: posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    // Fake API delay simulate
    setTimeout(() => {
      dispatch(setPosts(staticPosts)); // ✅ Redux me data set karo
    }, 2000);
  }, [dispatch]);
  return (
   <div className="profile-page pl-40 mt-25 min-h-screen bg-[var(--bg)] w-full">
     <div className="min-h-screen bg-[var(--bg)] w-full">
      {/* Header */}
      <header className="profile-header w-full h-16  items-center justify-between  bg-white shadow-md hidden">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <FaCog className="h-6 w-6 text-gray-700 hover:text-[var(--primary)]" />
        </button>
      </header>

      {/* Profile Section */}
      <div className="flex items-center gap-1 p-2 w-full md:w-1/2 justify-start">
       <div className="w-1/2 md:w-[100px]  "> <img
          src={profilePic}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        /></div>
        <div>
          <h2 className="text-xl font-semibold text-[var(--primary)]">
            Suraj 
          </h2>
          <p className="text-gray-600 mt-1">Digital Artist & Illustrator,earth is without art just eh || be vreative</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 px-4 justify-start ">
        <Button text="Edit Profile" />
        <Button text="Contact" />
      </div>

      {/* User Posts Grid */}
     {/* User Posts Grid */}
<div className=" columns-3 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-4 p-3">
  {posts.length > 0 ? (
    posts.map((post) => (
      <div key={post.id} className="mb-2 break-inside-avoid">
                <Post post={post} />
              </div> // ✅ Pass post & key
    ))
  ) : (
    <p className="text-gray-500 col-span-3 text-center">No posts yet</p>
  )}
</div>

    </div>
   </div>
  );
};

export default ProfilePage;
