# art-verse

 <div className="inline-block post-page ml-50 mt-30 bg-white rounded-xl shadow-lg w-1/3 p-4  ">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold">{post.createdBy.name}</span>
        {post.buyLink && (
          <a
            href={post.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[var(--secondary)] hover:bg-purple-700 px-3 py-1 rounded-lg"
          >
            Buy Now
          </a>
        )}
      </div>

      {/* Media */}
      <div className="overflow-hidden rounded-lg mb-3">
        {/* {post.type === "image" ? (
          <img src={post.image} alt={post.title} className="w-full" />
        ) : (
          <video src={post.image} controls className="w-full rounded-lg"></video>
        )} */}

        <img src={post.image} alt="" />
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-4">
          <button onClick={handleLike} className="flex items-center gap-1">
            {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
            <span>{liked ? post.likes + 1 : post.likes}</span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1"
          >
            <FaCommentAlt /> <span>{post.comments?.length || 0}</span>
          </button>
        </div>

        <button onClick={() => setShowComments(!showComments)}>
          <FaChevronUp
            className={`transition-transform ${
              showComments ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-2 border-t border-[#333] pt-2">
          <div className="max-h-32 overflow-y-auto space-y-2 mb-3">
            {post.comments?.length ? (
              post.comments.map((c, i) => (
                <p key={i} className="text-sm">
                  <span className="font-bold">{c.user}:</span> {c.text}
                </p>
              ))
            ) : (
              <p className="text-sm opacity-50">No comments yet.</p>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Add a comment..."
              className="w-full bg-[#2a2a2a] text-white p-2 rounded-lg outline-none"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-lg text-sm"
            >
              Post
            </button>
          </div>
        </div>
      )}
    
    </div>

     {post.buyLink && (
          <a
            href={post.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[var(--secondary)] hover:bg-purple-700 px-3 py-1 rounded-lg"
          >
            Buy Now
          </a>
        )}

        <span className="font-semibold">{post.createdBy.name}</span>


          <button onClick={() => setShowComments(!showComments)}>
          <FaChevronUp
            className={`transition-transform ${
              showComments ? "rotate-180" : ""
            }`}
          />
        </button>