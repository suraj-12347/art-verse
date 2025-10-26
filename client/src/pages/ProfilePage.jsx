import React, { useEffect, useState } from "react";
import logo from "../assets/artverse.png";
import profilePic from "../assets/mypic.jpg";
import { FaBookmark, FaCog } from "react-icons/fa";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../redux/slices/postSlice";
import { posts as staticPosts } from "../assets/data";
import Post from "../components/PostCard";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { data: posts, loading } = useSelector((state) => state.posts);

  const [activeTab, setActiveTab] = useState("created");

  useEffect(() => {
    setTimeout(() => {
      dispatch(setPosts(staticPosts));
    }, 2000);
  }, [dispatch]);

  const createdPosts = posts;
  const savedPosts = posts.filter((post) => post.isSaved);

  return (
  <div className="profile-page pl-40 pt-20 w-full ">
      <div className=" w-full flex justify-center pb-4 min-h-screen bg-[var(--bg)] m-0 ">
      <div className="w-full  flex flex-col items-center">
        {/* Header */}
      <header className="profile-header w-full h-16  items-center justify-between  bg-white shadow-md hidden">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <button onClick={()=>navigate('/settings')} className="p-2 rounded-full hover:bg-gray-100 transition">
          <FaCog className="h-6 w-6 text-[var(--primary)]" />
        </button>
      </header>

        <div className="flex flex-col items-center gap-3 p-4">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-[var(--primary)]"
          />
          <h2 className="text-xl font-semibold text-[var(--primary)]">ᵗʰᵉ᭄ᗩᖇτιىィ🎭🆂🅺࿐</h2>
          <p className="text-gray-600 text-center md:w-1/2">
          Hey this is Suraj ,I'd love to Inspire you with my colourful journals..🦋💖 "EåRťH" is without "ART "just "EH".👀🤌 cREåTiviťY is not a CoMpETiTioN😪
          </p>
        </div>

        <div className="flex gap-4 mb-4 w-full px-10 justify-center">
          <Button onClick={() => navigate("/edit-profile")} text="Edit Profile" color="secondary" />
          <Button text="Contact" color="secondary" />
        </div>

        <div className="flex w-full p-5">
          <button
            className={`flex w-full h-10 justify-center items-center ${
              activeTab === "created" ? "border-b-2 border-[var(--primary)]" : ""
            }`}
            onClick={() => setActiveTab("created")}
          >
            <p
              className={
                activeTab === "created"
                  ? "text-[var(--primary)] font-semibold"
                  : "text-[var(--dark)] "
              }
            >
              Created
            </p>
          </button>

          <button
            className={`flex w-full h-10 justify-center items-center ${
              activeTab === "saved" ? "border-b-2 border-[var(--primary)]" : ""
            }`}
            onClick={() => setActiveTab("saved")}
          >
            <p
              className={
                activeTab === "saved"
                  ? "text-[var(--primary)] font-semibold"
                  : "text-[var(--dark)]"
              }
            >
              Saved
            </p>
          </button>
        </div>

        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-2 mt-4 p-3 w-full">
          {(activeTab === "created" ? createdPosts : savedPosts).length > 0 ? (
            (activeTab === "created" ? createdPosts : savedPosts).map((post) => (
              <div key={post.id} className="mb-2 break-inside-avoid">
                <Post post={post} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3 mt-5">
              {activeTab === "created" ? "No created posts yet" : "No saved posts yet"}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProfilePage;
