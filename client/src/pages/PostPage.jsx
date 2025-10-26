import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaCommentAlt,FaBookmark } from "react-icons/fa";
import { posts as staticPosts } from "../assets/data";
import { setPosts } from "../redux/slices/postSlice";
import Loader from "../components/Loader";
import Button from "../components/Button";
import HomePage from './HomePage'

const PostPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const postState = useSelector((state) => state.posts);
  const posts = postState?.data || [];
  const loading = postState?.loading || false;

  const post = posts?.find((p) => String(p.id) === String(id));

  const [liked, setLiked] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => setLiked(!liked);

  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return;
    console.log("New Comment:", commentInput);
    setCommentInput("");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = post.image;
    link.download = "artverse-media";
    link.click();
    setShowMenu(false);
  };

  useEffect(() => {
    if (!posts.length) dispatch(setPosts(staticPosts));
  }, [posts.length, dispatch]);

  if (loading) return <Loader />;
  if (!post)
    return <h2 className="text-white text-center mt-10">Post Not Found</h2>;

  return (
    <>
    <div className="post-page pl-40 pt-8">
      <div className="flex flex-col items-center w-full md:pt-20 px-1 gap-8">
        {/* Main Post Card */}
        <div className="bg-white text-white rounded-xl shadow-lg w-full max-w-3xl p-3 md:p-6 border border-[var(--primary)]">
          {/* Two Columns */}
          <div className="flex flex-col md:flex-row gap-6 relative bg-[var(--bg)] p-5  rounded-2xl">
            {/* Left: Media */}
            <div className=" post-page-image w-[100%] md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 relative">
              {post.type?.toLowerCase() === "video" ? (
                <video
                  src={post.image}
                  controls
                  onClick={() => setShowMenu(!showMenu)}
                  className="w-full rounded-lg cursor-pointer"
                ></video>
              ) : (
                <img
                  src={post.image}
                  alt="post"
                  onClick={() => setShowMenu(!showMenu)}
                  className="w-full rounded-lg cursor-pointer"
                />
              )}

              {/* Popup Menu */}
              {showMenu && (
                <div className="absolute top-4 right-4 bg-[#fff] border  rounded-lg shadow-lg z-10">
                  <button
                    onClick={handleDownload}
                    className="block px-4 py-2 text-sm text-[var(--dark)] hover:bg-[var(--primary)] w-full text-left rounded-t-lg"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="block px-4 py-2 text-sm text-[var(--dark)] hover:bg-[var(--primary)]  w-full text-left rounded-b-lg"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Right: Actions + Info */}
            <div className="md:w-[60%] flex flex-col gap-4 justify-start rounded-2xl">
              <div className="flex  justify-between">
                 {/* Like */}
              <button onClick={handleLike} className="flex items-center gap-2 text-[var(--primary)]">
                {liked ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
                <span>{liked ? post.likes + 1 : post.likes}</span>
              </button>

              {/* Comment Toggle */}
              <div
                className="flex items-center gap-2 cursor-pointer text-[var(--primary)]"
                onClick={() => setShowComments(!showComments)}
              >
                <FaCommentAlt />
                <span>{post.comments?.length || 0}</span>
              
              </div>

              {/* Buy Link */}
              {post.buyLink && (
                <a
                  href={post.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--primary)] text-white hover:bg-purple-700 px-3 py-1 rounded-lg text-sm text-center"
                >
                  Buy Now
                </a>
              )}
              </div>

              {/* Artist Name */}
              <p className="font-semibold text-[var(--primary)] mt-2">{post.createdBy.name}</p>

              {/* Mood */}
              <p className="text-sm text-[var(--accent)] ">Mood: {post.mood}</p>

              {/* Description */}
              <p className="mt-2 text-[var(--dark)]">{post.description}</p>
              <div>
               <button onClick={() => setSaved(!saved)}>
                <FaBookmark className={saved ? "text-[var(--primary)]" : "text-[var(--secondary)]" } />
               </button>
              </div>

            </div>
          </div>

          {/* Comments List */}
        {/* Random Comment + Toggle Arrow (Above Input) */}
{/* Random Comment (shown only when comments are hidden) */}
{!showComments && post.comments?.length > 0 && (
  <div className="flex items-center justify-between mt-6 bg-white p-2 rounded-lg">
    <p className="text-sm text-[var(--dark)]">
      <span className="font-semibold">
        {post.comments[Math.floor(Math.random() * post.comments.length)].user}:
      </span>{" "}
      {
        post.comments[Math.floor(Math.random() * post.comments.length)].text
      }
    </p>
    <button
      onClick={() => setShowComments(true)}
      className="text-gray-400 hover:text-white transition-transform duration-200"
    >
      <span className="inline-block text-[var(--primary)]">▼</span>
    </button>
  </div>
)}

{/* Comments List (shown when showComments is true) */}
{showComments && post.comments?.length > 0 && (
  <div className="mt-4 bg-[var(--bg)] rounded-lg p-3">
    {post.comments.map((c, index) => (
      <p key={index} className="text-sm text-[var(--dark)] mb-1">
        <span className="font-semibold">{c.user}:</span> {c.text}
      </p>
    ))}
    {/* Close comments button */}
    <button
      onClick={() => setShowComments(false)}
      className="mt-2 text-sm text-[var(--primary)] "
    >
      Hide Comments ▲
    </button>
  </div>
)}



          {/* Comment Input (Full Width below both columns) */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Add a comment..."
              className="w-full bg-[var(--bg)] text-[var(--dark)] h-10 p-2 rounded-lg outline-none"
            />
           <Button onClick={handleCommentSubmit} text="Post" color="primary" />
          </div>
        </div>
      </div>
      
    </div>
    {/* <HomePage/> */}
    </>
    
  );
};

export default PostPage;
